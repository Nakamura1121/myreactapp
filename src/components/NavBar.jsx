import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex bg-red-600 h-8">
    <nav className='flex text-stone-50'>
      <ul className='flex space-x-2'>
        <li className='bg-black hover:bg-green-600'>
          <Link to='/'>Home</Link>
          
        </li>
        <li className='bg-black hover:bg-green-600'>
          
          <Link to='/about'>About</Link>
         
        </li>
        <li className='bg-black hover:bg-green-600 rounded-md'>
          
          <Link to='/contacts'>Contacts</Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default NavBar