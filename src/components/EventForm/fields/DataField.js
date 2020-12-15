import React, { useRef } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import PropTypes from 'prop-types';

export default function DataField(props) {
  const { data, onInputChange, dataForm, name, label, required } = props;
  const ref0 = useRef();

  const handleAutocompleteChange = (e, values) => {
    const fieldName = ref0.current.getAttribute('name');
    onInputChange({
      [fieldName]: values,
    });
  };

  return (
    <Autocomplete
      id={`highlights-demo-${Math.floor(
        Math.random() * Math.floor(100000000)
      )}`}
      ref={ref0}
      options={data}
      name={name}
      onInputChange={handleAutocompleteChange}
      getOptionLabel={(option) => option.name}
      getOptionSelected={(option, value) => option.name === value.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          name={name}
          value={dataForm[name] || ''}
          required={required}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}

DataField.propTypes = {
  dataForm: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
