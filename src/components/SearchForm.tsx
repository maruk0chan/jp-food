import React, { useEffect, useState } from 'react'
import AutocompleteInput from './AutocompleteInput'
import MultipleAutocompleteInput from './MultipleAutocompleteInput'

const url =
  'https://corsproxy.io/?' +
  encodeURIComponent(
    'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=bfa93fda871977e1&small_area=X021,X025,x045&count=20&party_capacity=50&format=json'
  )

const SearchForm = () => {
  const [data, setData] = useState<any[]>()

  // fetch data
  const dataFetch = async () => {
    const data = await (await fetch(url)).json()

    // set state when the data received
    setData(data)
  }

  return (
    <div className="border-double border-4 border-sky-500 space-y-4">
      <div>Search Conditions</div>
      <div>
        <MultipleAutocompleteInput
          title="Areas"
          placeholder="e.g. Ginza"
        />
      </div>
      <div>
        <MultipleAutocompleteInput
          title="Budget (¥)"
          placeholder="foobar"
        />
      </div>
      <div>
        <AutocompleteInput title="No. of results" />
      </div>
      <div>
        <label htmlFor="capacity">Party Capacity (more than)</label>
        <input type="number" />
      </div>
      <div>
        <button onClick={dataFetch}>Search</button>
        <button>Copy</button>
        <div>Return result: {data ? 'has data' : 'no data'}</div>
      </div>
    </div>
  )
}

export default SearchForm
