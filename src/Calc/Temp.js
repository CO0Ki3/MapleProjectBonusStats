import { useContext, useState } from 'react';
import { useStore, StoreContext } from "../hook";

function Temp() {
  const value = useContext(StoreContext);

  console.log(value[0])
  
  return <p>{}</p>;
}

export default Temp;
