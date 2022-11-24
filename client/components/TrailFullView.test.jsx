import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import TrailFullView from './TrailFullView'
import { BrowserRouter as Router } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

jest.mock('react-redux')

useSelector.mockReturnValue([
  { trailOne: 'Coronation St', trailTwo: 'Tin Man' },
])
const fakeDispatch = jest.fn()
useDispatch.mockReturnValue(fakeDispatch)

describe('<TrailFullView />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('shows delete button', () => {
    render(
      <Router>
        <TrailFullView />
      </Router>
    )
    const deleteButton = screen.getAllByRole('button')
    expect(deleteButton).toHaveLength(1)
  })
  it('check for image alt-text', () => {
    render(
      <Router>
        <TrailFullView />
      </Router>
    )
    const altText = screen.getByAltText('Grade icon')
    expect(altText).toBeInTheDocument()
  })
  it('deletes a trail from redux state', () => {
    render(
      <Router>
        <TrailFullView />
      </Router>
    )
    const deleteButton = screen.getAllByRole('button')
    fireEvent.click(deleteButton[0])
    expect(fakeDispatch).toHaveBeenCalled()
    const call = fakeDispatch.mock.calls
    expect(call).toHaveLength(1)
    // expect(action.payload.trails).toEqual({ trailOne: 'Coronation St' })
  })
})
