import React, { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import TrailJournal from './TrailJournal'
import WishList from './WishList'
import BikeCheck from './BikeCheck'
import MySetup from './MySetup'
import TrailFullView from './TrailFullView'
import CreateTrail from './CreateTrail'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trailjournal" element={<TrailJournal />} />
          <Route path="/create-trail/:id" element={<CreateTrail />} />
          <Route path="/trailjournal/:name" element={<TrailFullView />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/bike-check" element={<BikeCheck />} />
          <Route path="/my-setup" element={<MySetup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
