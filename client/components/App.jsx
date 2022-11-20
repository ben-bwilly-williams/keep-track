import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { fetchTrails } from '../actions'

import Nav from './Nav'
import Home from './Home'
import TrailJournal from './TrailJournal'
import WishList from './WishList'
import BikeCheck from './BikeCheck'
import MySetup from './MySetup'
import TrailFullView from './TrailFullView'
import CreateTrail from './CreateTrail'

// delete entry
// update entry
// search/filter by region, grade
// location radius
// link to Trailforks API

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrails())
  }, [])

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trailjournal" element={<TrailJournal />} />
          <Route path="/create-trail/" element={<CreateTrail />} />
          <Route path="/trailjournal/:id" element={<TrailFullView />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/bike-check" element={<BikeCheck />} />
          <Route path="/my-setup" element={<MySetup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
