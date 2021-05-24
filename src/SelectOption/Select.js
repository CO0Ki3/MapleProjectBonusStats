import { NativeSelect } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const nativeSelectStyles = makeStyles({
  root: {
    "&.MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "&.MuiInput-underline:after": {
      borderBottomColor: "#E1831D",
    },
    "&.MuiInputBase-root": {
      color: "white",
    },
  }
})

function Select({ onChange, options }) {

  const classes = nativeSelectStyles();

  return (
    <div>
      <NativeSelect defaultValue="" onChange={onChange} className={classes.root}>
        <option disabled value="">
          Select
        </option>
        {options.map((options, id) => (
          <option value={options.value} key={id}>
            {options.text}
          </option>
        ))}
      </NativeSelect>
    </div>
  );
}

export default Select;
