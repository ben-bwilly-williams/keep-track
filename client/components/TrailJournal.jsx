import React from 'react'
import { Link } from 'react-router-dom'

import TrailCard from './TrailCard'

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
