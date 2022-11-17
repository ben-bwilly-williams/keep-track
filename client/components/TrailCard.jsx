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
            <>
              <Link to={`/trailjournal/${trail.id}`}>
                <div className="preview-trail">
                  <img
                    src={`/images/${trail.gradeIcon}`}
                    alt="Difficulty grade"
                  />
                  <hr />
                  <h4 key={index}>{trail.trailName}</h4>
                  <h5 key={index}>{trail.location}</h5>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}

export default TrailCards
