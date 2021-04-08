import Step from '../ArrayList/StepList'

function SelectStep({ onChange, value }) {

    const handleChangeStepOption = ({ target: { step } }) => {
        onChange(Step.filter(Option => Option !== step).filter(option => option.step === step)[0]);
    }

    return (
    <select onChange={ handleChangeStepOption } value={ value } >
                    {
                        Step.map(option => (
                            <option key={option.step} value={option.step}>
                                {option.text}
                            </option>
                        ))
                    }
    </select>
    )
}

export default SelectStep;