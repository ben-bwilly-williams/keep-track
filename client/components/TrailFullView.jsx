import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchTrails } from '../actions'

// usParams link to trail name or id

const TrailFullView = () => {
  const { id } = useParams()
  console.log(id)

  const trails = useSelector((state) => state.trails)
  const dispatch = useDispatch()
  console.log(trails)

  useEffect(() => {
    dispatch(fetchTrails())
  }, [])

  function handleDelete(e, toDelete) {
    dispatch(deleteTrail(toDelete))
    e.preventDefault()
  }

  const currentTrail = trails.find((trail) => trail.id == id)
  // console.log(currentTrail)

  return (
    <>
      <div className="fullview-container">
        <div className="full-trail">
          <img src={`/images/${currentTrail.gradeIcon}`} alt="Grade icon" />
          <h2>{currentTrail.trailName}</h2>
          <h3>{currentTrail.location}</h3>
          <hr />
          <h5>Description</h5>
          <p>{currentTrail.description}</p>
          <h5>Condition/notes</h5>
          <p>{currentTrail.notes}</p>
          <h5>Date ridden</h5>
          <p>{currentTrail.date}</p>
          <button onClick={(e) => handleDelete(e)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default TrailFullView
