import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
                <nav>
            {/* Navbar content goes here */}
            {/* <img src="/logo.svg" alt="Apple Logo" /> */}
            <p>Crystal Studios</p>
            <ul>
                {navLinks
                .map(({label})  => (
                <li key={label}>
                <a href={`#${label.toLowerCase()}`}>{label}</a>
                </li>
                ))}
            </ul>

            <div className = "flex-center gap-3">
                <button>
                
                        <img src="/search.svg" alt="Sign In" />

                </button>
                <button>
                
                       <Link to="/cart">
                           <img  src="/cart.svg" alt="Cart" />
                       </Link>

                </button>

            </div>
            </nav>
    </header>
  )
}

export default Navbar