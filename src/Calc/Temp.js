import { useState, useContext } from 'react';
import {SortContext} from '../SelectOption/SelectListDisplay';
import {ListContext} from '../SelectOption/SelectListDisplay';

 const Temp = () => {
  const data1 = useContext(SortContext);
  const data2 = useContext(ListContext);
  console.log({data1});
  console.log({data2});
  return(
    <>
      <p>{data1}</p>
      <p>{data2}</p>
    </>
  );
}

export default Temp;
