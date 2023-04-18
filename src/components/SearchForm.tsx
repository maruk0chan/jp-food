import React, { useEffect, useState } from 'react'
import AutocompleteInput from './AutocompleteInput'
import MultipleAutocompleteInput from './MultipleAutocompleteInput'
import hot_pepper_api from '../json/hot_pepper_api.json'
import axios from 'axios'
import areaList from '../json/small_area.json'
import queryMap from '../json/query_map.json'
import { Counter } from '../features/counter/Counter';

const corsProxyPrefix = 'https://corsproxy.io/?'

const { base_url, key, format } = hot_pepper_api

const url =
  corsProxyPrefix +
  encodeURIComponent(
    `${base_url}/?key=${key}&small_area=X021,X025,x045&count=20&party_capacity=50&format=${format}`
  )

const SearchForm = () => {
  const [data, setData] = useState<any[]>()
  const [shopList, setShopList] = useState([])

  // fetch data
  const dataFetch = async () => {
    await axios
      .get(url)
      .then(function (response) {
        const { data } = response
        setData(data)
        console.log(`🤖\x1B[40;93;1mdata: \x1B[m`, data.results.shop)
        setShopList(data.results.shop)
      })
      .catch(function (error) {
        console.log(error)
      })

    // set state when the data received
  }

  return (
    <div className="border-double border-4 border-sky-500 space-y-4">
      <div>Search Conditions</div>
      <Counter></Counter>
      <div>
        <MultipleAutocompleteInput
          title="Areas"
          placeholder="Shinbashi 新橋"
          list={areaList}
          displayAttribute={['en', 'ja']}
          valueAttribute="id"
          exampleOptionIndices={[0]}
        />
      </div>
      <div>
        <MultipleAutocompleteInput
          title="Budget (¥)"
          placeholder="¥2,000 ~ ¥5,000"
          list={queryMap.budget.options}
          displayAttribute="name"
          valueAttribute="code"
          exampleOptionIndices={[0, 1]}
        />
      </div>
      <div>
        <AutocompleteInput
          title="No. of results"
          list={['10', '20', '50', '100']}
        />
      </div>
      <div>
        <label htmlFor="capacity">Party Capacity (more than)</label>
        <input type="number" />
      </div>
      <div>
        <button onClick={dataFetch}>Search</button>
        <button>Copy</button>
        <div>Return result: {shopList.length}</div>
      </div>
    </div>
  )
}

export default SearchForm
