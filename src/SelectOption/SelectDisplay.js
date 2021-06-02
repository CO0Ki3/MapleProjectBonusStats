import React, { useState } from "react";
import Select from "./Select";
import { ObjectList } from "../ArrayList/ObjectList";
import SelectCompare from "./SelectCompare";
import { Main } from "./SelectStyle";
import { useStore } from '../hook';

function SelectDisplay() {
  const [selectObjectValue, setselectObjectValue] = useState("");

  const [store, setStore] = useStore("first");

  const handleChangeObjectValue = ({ target: { value } }) => {
    setselectObjectValue(value);
    setStore(value);
  };

  return (
    <>
      <Main>
        <Select onChange={handleChangeObjectValue} options={ObjectList} />
      </Main>
      <SelectCompare value={selectObjectValue} />
    </>
  );
}

export default SelectDisplay;
