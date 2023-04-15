import React from 'react'
import AutoCompleteInput from './AutoCompleteInput'
import MultipleOptionsInput from './MultipleOptionsInput'

const SearchForm = () => {
  return (
    <div className="border-double border-4 border-sky-500 space-y-4">
      <div>Search Conditions</div>
      <div>
        <MultipleOptionsInput title="Areas" placeholder="e.g. Ginza, Asakusa"/>
      </div>
      <div>
        <MultipleOptionsInput title="Budget (¥)" placeholder="foobar"/>
      </div>
      <div>
        <AutoCompleteInput title="No. of results" />
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
