import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// usParams link to trail name or id

const TrailCards = () => {
  return (
    <>
      <div>
        <Link to={'/trailjournal/:name'}>
          <div className="preview-trail">
            <img
              className="grade-image-small"
              src="/images/grade-5.png"
              alt="Grade icon"
            />
            {/* <h4 className="trail-preview">Icon</h4> */}
            <h4 className="trail-preview">Name</h4>
            <h4 className="trail-preview">Location</h4>
          </div>
        </Link>
      </div>
    </>
  )
}

export default TrailCards
