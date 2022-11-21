import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTrail, addTrail } from '../actions'
import { useNavigate } from 'react-router-dom'

// import {createTrail} from '../actions/index'

const CreateTrail = () => {
  const [gradeIcon, setGradeIcon] = useState('')
  const [trailName, setTrailName] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTrail = {
      gradeIcon,
      trailName,
      location,
      description,
      notes,
      date,
    }
    dispatch(createTrail(newTrail))
    // dispatch(addTrail(newTrail))
    navigate('/trailjournal')
  }

  return (
    <>
      <div className="fullview-container">
        <div className="create-trail">
          <form onSubmit={handleSubmit}>
            <h2>New entry</h2>
            <select
              value={gradeIcon}
              onChange={(event) => setGradeIcon(event.target.value)}
              type="text"
              required
            >
              <option defaultValue hidden value="gradeIcon">
                Difficulty
              </option>
              <option value="grade-2.png">2 – Beginner</option>
              <option value="grade-3.png">3 – Intermediate</option>
              <option value="grade-4.png">4 – Advanced</option>
              <option value="grade-5.png">5 – Expert</option>
              <option value="grade-6.png">6 – Extreme</option>
            </select>
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
              placeholder="Date ridden"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button>Add to trails</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateTrail
