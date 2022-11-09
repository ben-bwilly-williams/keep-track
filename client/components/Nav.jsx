import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav-block">
        <ul className="nav-ul">
          <p>icon</p>
          {/* <Link to={'/trailjournal'}> */}
          <li className="nav-li">Trail journal</li>
          {/* </Link> */}
          <li className="nav-li">Wish list</li>
          <li className="nav-li">Bike check</li>
          <li className="nav-li">My setup</li>
        </ul>
      </div>
    </>
  )
}

export default Nav
