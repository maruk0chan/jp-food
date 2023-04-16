import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

interface AutocompleteInputProps {
  title: string
}

const AutocompleteInput = ({ title }: AutocompleteInputProps) => {
  const options = ['Default 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      disablePortal
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
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

export default AutocompleteInput
