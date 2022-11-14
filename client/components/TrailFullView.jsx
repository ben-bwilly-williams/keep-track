import React, { useState, useEffect, useParams } from 'react'
// import { Link } from 'react-router-dom'

const TrailFullView = () => {
  // const { name } = useParams()

  // const trail = trailsDataNonexistent.find((trail) => trail.name == name)
  // console.log(trail)

  return (
    <>
      <div className="fullview-container">
        <div className="fullview-trail">
          <img src="" alt="Grade icon" />
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
          <p>Some ruts and damage from spring snow.</p>
          <h5>Date ridden</h5>
          <p className="date">28/12/21</p>
        </div>
      </div>
    </>
  )
}

export default TrailFullView
