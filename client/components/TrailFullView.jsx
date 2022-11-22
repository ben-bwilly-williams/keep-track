import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { removeTrail } from '../actions'

const TrailFullView = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const trails = useSelector((state) => state.trails)

  function handleDelete(e) {
    dispatch(removeTrail(currentTrail.id))
    e.preventDefault()
    navigate('/trailjournal')
  }

  const currentTrail = trails.find((trail) => trail.id == id)

  // WORK ON PREVIOUS/NEXT BUTTONS

  // const index = trails.indexOf(currentTrail)
  // let nextTrail = trails[index + 1].id
  // let previousTrail = trails[index - 1].id
  // console.log(index)

  // if (index === trails.length) nextTrail = trails[trails.length].id
  // if (index === 0) previousTrail = trails[0].id

  return (
    <>
      <div className="fullview-container">
        {/* <Link to={`/trailjournal/${previousTrail}`}>
          <button disabled={index == 0}>Previous</button>
        </Link> */}
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
        <div>
          {/* <Link to={`/trailjournal/${nextTrail}`}>
            <button disabled={index == trails.length - 1}>Next</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default TrailFullView
