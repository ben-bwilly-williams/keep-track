import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams, useNavigate } from 'react-router-dom'

import FullTrailCard from './FullTrailCard'

// import { removeTrail } from '../actions'

const TrailFullView = () => {
  // const { id } = useParams()
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const trails = useSelector((state) => state.trails)

  // function handleDelete(e) {
  //   dispatch(removeTrail(currentTrail.id))
  //   e.preventDefault()
  //   navigate('/trailjournal')
  // }

  // const currentTrail = trails.find((trail) => trail.id == id)

  return (
    <>
      <div className="fullview-container">
        <FullTrailCard />
      </div>
    </>
  )
}

export default TrailFullView
