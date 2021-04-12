import SelectListDisplay from "./SelectListDisplay";
import SelectBox from "./SelectBox";
import {
  WeaponList,
  AccList,
  WeaponSort,
  AccSort,
} from "../ArrayList/ObjectList";
import {
  AddOptionWeapon,
  AddOptionAcc,
} from "../ArrayList/BonusStatsList";

function SelectCompare({ value }) {
  if(value) {
    return (
      <>
        <SelectListDisplay options={displayLists[value]} />
        <SelectBox options={boxLists[value]} />
      </>
    );
  } else {
    return (
      <></>
    )
  }
}

const displayLists = {
  weapon: {
    displaylist: WeaponList,
    sort: WeaponSort,
  },
  acc: {
    displaylist: AccList,
    sort: AccSort,
  },
};

const boxLists = {
  weapon: AddOptionWeapon,
  acc: AddOptionAcc,
};

export default SelectCompare;
