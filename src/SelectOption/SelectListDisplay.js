import React, { useCallback, useEffect, useState } from "react";
import Select from "./Select";
import { useStore } from "../hook";

function SelectListDisplay(props) {
  const [listStore, setListStore] = useStore("list");

  const [sortStore, setSortStore] = useStore("sort");

  const [selectListValue, setSelectListValue] = useState("");

  const [selectSortValue, setSelectSortListValue] = useState("");

  const handleChangeListValue = ({ target: { value, key } }) => {
    setSelectListValue(value);
    setListStore(value);
  };

  const handleChangeSortList = ({ target: { value } }) => {
    setSelectSortListValue(value);
    setSortStore(value);
  };

  return (
    <div>
      {props.options === undefined || (
        <>
          <Select
            onChange={handleChangeListValue}
            options={props.options.displaylist}
          />
          <Select
            onChange={handleChangeSortList}
            options={props.options.sort}
          />
        </>
      )}
    </div>
  );
}

export default SelectListDisplay;
