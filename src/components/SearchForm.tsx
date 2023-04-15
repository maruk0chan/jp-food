import React from 'react'
import AutoCompleteInput from './AutoCompleteInput';
import MultipleOptionsInput from './MultipleOptionsInput';

const SearchForm = () => {
  return (
    <div className="border-double border-4 border-sky-500">
      This is a search form.
      <AutoCompleteInput/>
      <MultipleOptionsInput/>
    </div>
  )
}

export default SearchForm
