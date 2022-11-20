import React from 'react'
import { Link } from 'react-router-dom'

import TrailCard from './TrailCard'

// delete entry
// update entry
// search/filter by region, grade
// location radius
// link to Trailforks API

const TrailJournal = () => {
  return (
    <>
      <div className="card-container">
        <Link to={'/create-trail'}>
          <button className="new-trail-button">
            <h1 className="plus">+</h1>Add a trail
          </button>
        </Link>
        <TrailCard />
      </div>
    </>
  )
}

export default TrailJournal
