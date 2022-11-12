import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// usParams link to trail name or id

const TrailCard = () => {
  return (
    <>
      <div>
        <Link to={'/trailjournal/:name'}>
          <div className="trail-card"></div>
        </Link>
      </div>
    </>
  )
}

export default TrailCard
