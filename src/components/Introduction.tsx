import React from 'react'

const Introduction = () => {
  return (
    <div className="border-double border-4 border-sky-500">
      <h1>Welcome to Gourmet in Japan</h1>
      <p>
        This is an web application to help you find the restaurants that meet
        your search condition. 😉
      </p>
      <p>
        This application requires <a href="https://www.google.com/chrome/">Chrome</a> and <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en">CORS extension</a>.
      </p>
      <p><i className='ml-5 text-sm'>Please note that it may cause <b>security problems</b> if you browse other sites with CORS enabled so turn it on <b>only if</b> you are using this application</i></p>
      <p>
        Select some conditions to filter out the restaurants you are looking for
      </p>
      <p>The following default example shows you if you wanna find:</p>
      <div>
        <p>
          1.{' '}
          <b>
            <u>Ginza</u>
          </b>{' '}
          or{' '}
          <b>
            <u>Tsukiji</u>
          </b>
        </p>
        <p>
          2. Budget{' '}
          <b>
            <u>¥5,001 - ¥10,000</u>
          </b>
        </p>
        <p>
          3. Showing the first{' '}
          <b>
            <u>20</u>
          </b>{' '}
          results of total results
        </p>
        <p>
          4. Restaurants that have party capacity over{' '}
          <b>
            <u>50</u>
          </b>
        </p>
        <p>
          *For multiple selections,{' '}
          <b>
            <u>ONLY the FIRST 5</u>
          </b>{' '}
          selections will be applied and you can also{' '}
          <b>
            <u>DRAG</u>
          </b>{' '}
          to change the orders
        </p>
      </div>
    </div>
  )
}

export default Introduction
