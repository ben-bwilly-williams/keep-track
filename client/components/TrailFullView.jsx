import React, { useState, useEffect, useParams } from 'react'
import { deleteTrail } from '../actions'
import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

const TrailFullView = () => {
  // const { name } = useParams()
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
          <h2>Rude Rock</h2>
          <h3>Coronet Peak, Queenstown</h3>
          <hr />
          <h5>Description</h5>
          <p>
            Long, flowy, extremely fast descent perfectly built berms dug into
            the hill. Occasional rock features and jumps but generally pretty
            straight-forward.
          </p>
          <h5>Condition/notes</h5>
          <p>
            Some ruts and damage from spring snow. Bike felt great with firmer
            suspension and fast tyres.
          </p>
          <h5>Date ridden</h5>
          <p className="date">28/12/21</p>
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
