import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { removeTrail } from '../actions'

const FullTrailCard = () => {
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

  // const index = trails.indexOf(currentTrail)
  // const nextTrail = trails[index + 1].id
  // const previousTrail = trails[index - 1].id
  // // figure how to show when there is no previous or next index
  // console.log(nextTrail, previousTrail)

  return (
    <>
      {/* <Link to={`/trailjournal/${previousTrail}`}>
        <button>Previous</button>
      </Link> */}
      {/* <Link to={`/trailjournal/${currentIndex}`}></Link> */}
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
          <button>Next</button>
        </Link> */}
      </div>
    </>
  )
}

export default FullTrailCard
