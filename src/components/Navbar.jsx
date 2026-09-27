import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'

const Navbar = () => {
  const { cartItems } = useContext(ShopContext)
  const totalItems = Object.values(cartItems).reduce(
    (sum, quantity) => sum + quantity,
    0
  )

  return (
    <header>
                <nav>
            {/* Navbar content goes here */}
            {/* <img src="/logo.svg" alt="Apple Logo" /> */}
            <p>Crystal Studios</p>
            <ul>
                {navLinks.map(({ label, link }) => (
                <li key={label}>
                <Link to={link}>{label}</Link>
                </li>
                ))}
            </ul>

            <div className = "flex-center gap-3">
                <button className="relative">
                
                        <img src="/search.svg" alt="Sign In" />

                </button>
                <button type="button" aria-label={`Cart with ${totalItems} items`}>
                  {totalItems > 0 && ( <span className="absolute ml-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] text-white">
                    {totalItems}
                      </span>
                      )}
                
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