import React, { useState, useEffect, useParams } from 'react'
import { deleteTrail } from '../actions'
import { useDispatch } from 'react-redux'
import trailsDb from '../../server/db/trailsDb'

// import { Link } from 'react-router-dom'

const TrailFullView = () => {
  // const { name } = useParams()
  const trail = trailsDb
  const dispatch = useDispatch()

  function handleDelete(e, toDelete) {
    dispatch(deleteTrail(toDelete))
    e.preventDefault()
  }

  // const trail = trailsDataNonexistent.find((trail) => trail.name == name)
  // console.log(trail)

  return (
    <>
      <div className="fullview-container">
        <div className="full-trail">
          <img
            className="grade-image"
            src="/images/grade-4.png"
            alt="Grade icon"
          />
          <h2>{trail.trailName}</h2>
          <h3>{trail.location}</h3>
          <hr />
          <h5>Description</h5>
          <p>{trail.description}</p>
          <h5>Condition/notes</h5>
          <p>{trail.notes}</p>
          <h5>Date ridden</h5>
          <p className="date">{trail.date}</p>
          {/* <button>Remove</button> */}
          <button onClick={(e) => handleDelete(e)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default TrailFullView
