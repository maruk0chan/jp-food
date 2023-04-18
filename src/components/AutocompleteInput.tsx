import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

interface AutocompleteInputProps {
  title: string
  list: string[]
}

const AutocompleteInput = (props: AutocompleteInputProps) => {
  const { title, list } = props
  const options = list
  const [value, setValue] = useState(options[0])
  const [inputValue, setInputValue] = useState('')

  return (
    <Autocomplete
      disablePortal
      value={value}
      onChange={(event: any, newValue) => {
        if (!!newValue) setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
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
