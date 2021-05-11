import React, { useContext, useState } from "react";
import { SortContext } from "../SelectOption/SelectListDisplay";
import { ListContext } from "../SelectOption/SelectListDisplay";
import { StepContext } from "../SelectOption/SelectBox";
import { OptionContext } from "../SelectOption/SelectBox";

const Temp = () => {
  const data1 = useContext(ListContext);
  const data2 = useContext(SortContext);
  const data3 = useContext(StepContext);
  const data4 = useContext(OptionContext);


  console.log({ data1 });
  console.log({ data2 });
  console.log({ data3 });
  console.log({ data4 });
  return <></>;
}

export default Temp;
