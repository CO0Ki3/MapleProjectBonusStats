import { PowerfulPercent } from '../ArrayList/StepPerList';

function PowerfulBonusStatsCalc({ value, key_ }) {

  const per = PowerfulPercent[value]

  return(
    <p>강환: {per}</p>
  )
}

export default PowerfulBonusStatsCalc;