import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

interface AutocompleteInputProps {
  title: string
}

interface Movie {
  title: string
  year: number
}

const AutocompleteInput = ({ title }: AutocompleteInputProps) => {
  const options = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 }]  
  const [value, setValue] = useState<Movie | null>(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      disablePortal
      value={value}
      onChange={(event: any, newValue: Movie | null) => {
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
      getOptionLabel={(option) => option.title ?? option}
    />
  )
}

export default AutocompleteInput
