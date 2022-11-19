import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const TrailFullView = () => {
  const { id } = useParams()

  const trails = useSelector((state) => state.trails)

  // function handleDelete(e, toDelete) {
  // dispatch(deleteTrail(toDelete))
  // e.preventDefault()
  // }

  const currentTrail = trails.find((trail) => trail.id == id)

  return !currentTrail ? (
    <div></div>
  ) : (
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
