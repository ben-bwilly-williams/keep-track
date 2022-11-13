import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// usParams link to trail name or id

const TrailCard = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTrail = { name, location, description, notes }
    console.log(newTrail)
  }

  return (
    <>
      <div>
        {/* <Link to={'/trailjournal/:name'}> */}
        <div className="trail-card">
          <img src="" alt="Grade icon" />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Trail name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <textarea
              placeholder="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <textarea
              placeholder="Condition/notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <input placeholder="Rating" type="text" required />
            <button>Add to trails</button>
          </form>
        </div>
        {/* </Link> */}
      </div>
    </>
  )
}

export default TrailCard
