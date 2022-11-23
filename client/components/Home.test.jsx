import React from 'react'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('Home image', () => {
  it('renders image element', async () => {
    render(<Home />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it('checks for alt text', async () => {
    render(<Home />)
    expect(screen.getByAltText('Tree roots')).toBeInTheDocument()
  })
})

describe('Home text', () => {
  it('renders headers', async () => {
    render(<Home />)
    const headers = screen.getAllByRole('heading')
    expect(headers).toHaveLength(2)
  })
  it('renders image element', async () => {
    render(<Home />)
    const headers = screen.getAllByRole('heading')
    expect(headers[0]).toHaveTextContent('Keep Track.')
  })
})
