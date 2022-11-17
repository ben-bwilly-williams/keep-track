import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchTrails } from '../actions'

const TrailCards = () => {
  const trails = useSelector((state) => state.trails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrails())
  }, [])

  return (
    <>
      <div>
        {trails.map((trail, index) => {
          return (
            <Link to={`/trailjournal/${trail.id}`} key={index}>
              <div className="preview-trail">
                <img
                  // key={index}
                  src={`/images/${trail.gradeIcon}`}
                  alt="Difficulty grade"
                />
                <hr />
                <h4>{trail.trailName}</h4>
                <h5>{trail.location}</h5>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default TrailCards
