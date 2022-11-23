import React from 'react'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('<Home />', () => {
  it('renders image element', async () => {
    render(<Home />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it('checks for alt text', async () => {
    render(<Home />)
    expect(screen.getByAltText('Tree roots')).toBeInTheDocument()
  })
})
