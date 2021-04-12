import { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SelectTemp from "./SelectTemp";
import Step from "../ArrayList/StepList";

const SelectBoxStyle = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const Delete = styled.div`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

function SelectBox(props) {
  const [selectValues, setSelectValues] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const selectOptionValues = selectValues.map(
      (selectValue) => selectValue.option.value
    );

    if (typeof props.options !== "undefined") {
      setOptions(
        props.options.filter(
          (option) => !selectOptionValues.includes(option.value)
        )
      );
    }
  }, [selectValues, props.options]);

  const handleChangeOption = (value) => {
    const key = uuidv4();
    const _value = {
      key,
      option: value,
      step: { value: "", text: "Select" },
    };

    setSelectValues([...selectValues, _value]);
  };

  // const handleChangeStep = value => {
  //   const key = uuidv4();
  //   setSelectSteps([...selectSteps, { ...value, key }]);
  // };

  const handleChangeInnerOptionClosure = (key) => {
    return (value) => {
      setSelectValues(
        selectValues.map((selectValue) =>
          selectValue.key === key
            ? { key, option: value, step: { value: "", text: "Select" } }
            : selectValue
        )
      );
    };
  };

  const handleChangeInnerStepClosure = (key) => {
    return (value) => {
      setSelectValues(
        selectValues.map((selectValue) =>
          selectValue.key === key
            ? { key, option: selectValue.option, step: value }
            : selectValue
        )
      );
    };
  };

  const handleDeleteInnerSelectClosure = (key) => {
    return () => {
      setSelectValues(
        selectValues.filter((selectValue) => selectValue.key !== key)
      );
    };
  };

  return props.options ? (
    <>
      {selectValues.map((selectValue) => (
        <SelectBoxStyle key={selectValue.key}>
          <SelectTemp
            lists={options}
            onChange={handleChangeInnerOptionClosure(selectValue.key)}
            value={selectValue.option}
          />
          <p>Value : {selectValue.option.value}</p>
          {selectValue.option.value !== "" && (
            <>
              <SelectTemp
                lists={Step}
                onChange={handleChangeInnerStepClosure(selectValue.key)}
                value={selectValue.step}
              />
              <p>Step : {selectValue.step.text}</p>
            </>
          )}

          <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>
            삭제
          </Delete>
        </SelectBoxStyle>
      ))}
      {/* { props.options === undefined || selectValues.length === 4 || isVisible === false || <SelectBoxStyle><SelectOption onChange={handleChangeOption} lists={ props.options } value='Select'/><SelectStep onChange={ handleChangeStep } value='Select' /></SelectBoxStyle> } */}
      {selectValues.length === 4 || (
        <SelectBoxStyle>
          <SelectTemp
            onChange={handleChangeOption}
            lists={options}
            value={{ value: "", text: "Select" }}
          />
        </SelectBoxStyle>
      )}
    </>
  ) : (
    <></>
  );
}

export default SelectBox;
