function SelectTemp({ lists, onChange, value }) {
  const handleChangeOption = ({ target: { value } }) => {
    onChange(lists.filter((option) => option.value === value)[0]);
  };

  return (
    <>
      {lists === undefined || (
        <select onChange={handleChangeOption} value={value.value}>
          <option disabled value="">
            Select
          </option>
          {value.value && <option value={value.value}>{value.text}</option>}
          {lists.filter((option) => option.value !== value.value).map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
        </select>
      )}
    </>
  );
}

export default SelectTemp;
