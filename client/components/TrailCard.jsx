import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TrailCard = () => {
  const trails = useSelector((state) => state.trails)
  // console.log(trails)

  return (
    <>
      {trails.map((trail, index) => {
        return (
          <Link to={`/trailjournal/${trail.id}`} key={index}>
            {/* {console.log(index)} */}
            <div className="preview-trail">
              <img src={`/images/${trail.gradeIcon}`} alt="Difficulty grade" />
              <hr />
              <h4>{trail.trailName}</h4>
              <h5>{trail.location}</h5>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default TrailCard
