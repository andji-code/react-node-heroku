import React from 'react'
import {NavLink} from 'react-router-dom'
const Home = (props) =>{
    return (
        <div className="Home">
          <h1>Project Home</h1>
          <NavLink to={'/list'}>
            <button variant="raised">
                My List
            </button>
          </NavLink>
        </div>
        )
}

export default Home