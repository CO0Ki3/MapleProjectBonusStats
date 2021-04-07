import { Step } from '../ArrayList/BonusStatsList'

function SelectStep({ onChange }) {

    const handleChangeStepOption = ({ target: { step } }) => {
        onChange(Step.filter(Option => Option !== step).filter(option => option.step === step)[0]);
    }

    return (
    <select onChange={ handleChangeStepOption } >
                    {
                        Step.map(option => (
                            <option key={Step.step} value={option.step}>
                                {option.text}
                            </option>
                        ))
                    }
    </select>
    )
}

export default SelectStep;