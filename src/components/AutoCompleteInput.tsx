import { Autocomplete, TextField } from '@mui/material'

const AutoCompleteInput = () => {
  const options = ['The Godfather', 'Pulp Fiction'];

  return (
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Movie"
          />
        )}
      />
  );
};

export default AutoCompleteInput;