import React, { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import TrailJournal from './TrailJournal'
import WishList from './WishList'
import BikeCheck from './BikeCheck'
import MySetup from './MySetup'
import TrailView from './TrailFull'

const App = () => {
  // const [greeting, setGreeting] = useState('')
  // const [count, setCount] = useState(0)
  // const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   getGreeting()
  //     .then((greeting) => {
  //       console.log(greeting)
  //       setGreeting(greeting)
  //       setIsError(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setIsError(true)
  //     })
  // }, [count])

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trailjournal" element={<TrailJournal />} />
          <Route path="/trailjournal/:name" element={<TrailView />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/bike-check" element={<BikeCheck />} />
          <Route path="/my-setup" element={<MySetup />} />
        </Routes>
      </Router>
      {/* {count} */}
      {/* <h1>{greeting}</h1> */}
      {/* {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button> */}
    </>
  )
}

export default App
