function SelectOption({ lists, onChange }) {

    const handleChangeOption = ({ target: { value } }) => {
        onChange(lists.filter(Option => Option !== value).filter(option => option.value === value)[0]);
        console.log(lists.text)
    }
    return (
        <>
            {lists === undefined ||
                <select onChange={ handleChangeOption } value={ lists.text }>
                    {
                        lists.map(option => (
                            <option key={lists.value} value={option.value}>
                                {option.text}
                            </option>
                        ))
                    }
                </select>
            }
        </>
    )
}

export default SelectOption;