import React from 'react'
import AutoCompleteInput from './AutoCompleteInput'
import MultipleOptionsInput from './MultipleOptionsInput'

const SearchForm = () => {
  return (
    <div className="border-double border-4 border-sky-500">
      Search Condition(s)
      <AutoCompleteInput />
      <MultipleOptionsInput />
      <div>
        <label htmlFor="area">Choose areas* (e.g. Ginza, Asakusa)</label>
        <MultipleOptionsInput />
      </div>
      <div>
        <label htmlFor="budget">Budget (¥)*</label>
        <MultipleOptionsInput />
      </div>
      <div>
        <label htmlFor="count">Showing no. of results</label>
        <AutoCompleteInput />
      </div>
      <div>
        <label htmlFor="capacity">Party Capacity (more than)</label>
        <input type="number" />
      </div>
      <div>
        <button>Search</button>
        <button>Copy</button>
      </div>
    </div>
  )
}

export default SearchForm
