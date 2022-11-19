import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTrail, createTrail } from '../actions'
import { useNavigate } from 'react-router-dom'

// import {createTrail} from '../actions/index'

const CreateTrail = () => {
  const [trailName, setTrailName] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTrail = { trailName, location, description, notes, date }
    dispatch(addTrail(newTrail))
    // createTrail(newTrail)
    navigate('/trailjournal')
  }

  return (
    <>
      <div className="fullview-container">
        {/* <Link to={'/trailjournal/:name'}> */}
        <div className="create-trail">
          <img src="" alt="Grade icon" />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Trail name"
              type="text"
              required
              value={trailName}
              onChange={(e) => setTrailName(e.target.value)}
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
            <input
              placeholder="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button>Add to trails</button>
          </form>
        </div>
        {/* </Link> */}
      </div>
    </>
  )
}

export default CreateTrail
