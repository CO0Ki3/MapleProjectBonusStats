import React, { useState, createContext } from "react";
import Select from "./Select";
import Temp from '../Calc/Temp';

export const SortContext = createContext();
export const ListContext = createContext();

function SelectListDisplay(props) {
  const [selectListValue, setSelectListValue] = useState("");

  const [selectSortListValue, setSelectSortListValue] = useState("");

  const handleChangeListValue = ({ target: { value } }) => {
    setSelectListValue(value);
  };

  const handleChangeSortList = ({ target: { value } }) => {
    setSelectSortListValue(value);
  };

  return (
    <div>
      {props.options === undefined || (
        <>
          <Select
            onChange={handleChangeListValue}
            options={props.options.displaylist}
          />
          <p>Acc : {selectListValue}</p>
          <Select
            onChange={handleChangeSortList}
            options={props.options.sort}
          />
          <p>Sort : {selectSortListValue}</p>
        </>
      )}
      <SortContext.Provider value={selectSortListValue}>
        <ListContext.Provider value={selectListValue}>
          <Temp />
        </ListContext.Provider>
      </SortContext.Provider>
    </div>
  );
}

export default SelectListDisplay;
