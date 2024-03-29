import React from 'react'

const Hamburger = () => {
      return (
            <div className='md:hidden'>
                  <input type="checkbox" id="menuToggle" className="hidden" />
                  <label htmlFor="menuToggle" className="menu-icon cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                  </label>
            </div>
      )
}

export default Hamburger