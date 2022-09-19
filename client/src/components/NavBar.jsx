import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex h-8 bg-red-600">
    <nav className='flex text-stone-50'>
      <ul className='flex space-x-2'>
        <li className='bg-black hover:bg-green-600'>
          <Link to='/'>Home</Link>
          
        </li>
        <li className='bg-black hover:bg-green-600'>
          
          <Link to='/about'>About</Link>
         
        </li>
        <li className='bg-black rounded-md hover:bg-green-600'>
          <link to='/main'>Main</link>
        </li>
        <li className='bg-black rounded-md hover:bg-green-600'>
          
          <Link to='/contacts'>Contacts</Link>
        </li>
        <li className='bg-black rounded-md hover:bg-green-600'>
          <link to='/register'>Register</link>
        </li>
        <Link to='/confirmation'>Confirmation</Link>
        <li>
          <ul>
            <li>
              <link to="/confirmation">Confirmation</link> 
            </li>
          </ul>
        </li>
      
      </ul>
    </nav>
  </div>
  )
}

export default NavBar