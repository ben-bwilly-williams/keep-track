import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="nav-block">
        <ul className="nav-ul">
          <p>icon</p>
          <Link to={'/trailjournal'}>
            <li className="nav-li">Trail journal</li>
          </Link>
          <Link to={'/wishlist'}>
            <li className="nav-li">Wish list</li>
          </Link>
          <Link to={'/bike-check'}>
            <li className="nav-li">Bike check</li>
          </Link>
          <Link to={'/my-setup'}>
            <li className="nav-li">My setup</li>
          </Link>
          <Link to={'/'}>
            <button className="home-button">Home</button>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav
