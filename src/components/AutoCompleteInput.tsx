import { Autocomplete, TextField } from '@mui/material'

interface AutoCompleteInputProps {
  title: string
}

const AutoCompleteInput = ({ title }: AutoCompleteInputProps) => {
  const options = ['The Godfather', 'Pulp Fiction']

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={title}
        />
      )}
    />
  )
}

export default AutoCompleteInput
