import React from 'react'
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
                
                        <img src="/cart.svg" alt="Cart" />

                </button>

            </div>
            </nav>
    </header>
  )
}

export default Navbar