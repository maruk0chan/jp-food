import * as React from 'react'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

interface MultipleAutocompleteInputProps {
  list: any[]
  title: string
  placeholder: string
  displayAttribute: string | string[]
  valueAttribute: string
}

const MultipleAutocompleteInput = (props: MultipleAutocompleteInputProps) => {
  const { list, title, placeholder, displayAttribute, valueAttribute } = props
  const fixedOptions = [list[6]]
  const [value, setValue] = React.useState([...fixedOptions, list[13]])
  const composeLabel: (option: any) => string = (option: any) => {
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
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ])
      }}
      options={list}
      getOptionLabel={(option) => composeLabel(option)}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={composeLabel(option)}
            {...getTagProps({ index })}
            key={option.id}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={title}
          placeholder={placeholder}
        />
      )}
    />
  )
}

export default MultipleAutocompleteInput
