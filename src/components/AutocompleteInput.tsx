import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

interface AutocompleteInputProps {
  title: string
  list: string[]
  displayAttribute: string | string[]
  valueAttribute: string
}

const AutocompleteInput = (props: AutocompleteInputProps) => {
  const { title, list, displayAttribute, valueAttribute } = props
  const options = list
  const [value, setValue] = useState(options[0])
  const [inputValue, setInputValue] = useState('')

  const composeLabel: (option: any) => string = (option: any) => {
    if (!displayAttribute) return option
    if (Array.isArray(displayAttribute)) {
      let label = ''
      displayAttribute.forEach((item) => {
        label += option[item] + ' '
      })
      return label.trim()
    } else {
      return option[displayAttribute]
    }
  }

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
      getOptionLabel={(option) => composeLabel(option)}
    />
  )
}

export default AutocompleteInput
