import React from 'react'

const Header = ({ pageTitle }) => {
  return (
      <header>
        <h1 className='text-black'>{pageTitle}</h1>
        
        <div>
        search
        </div>
      </header>
  )
}

export default Header