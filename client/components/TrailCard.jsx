import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TrailCard = () => {
  const trails = useSelector((state) => state.trails)

  return !trails ? (
    <div></div>
  ) : (
    <>
      <div>
        {trails.map((trail) => {
          return (
            <Link to={`/trailjournal/${trail.id}`} key={trail.id}>
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

export default TrailCard
