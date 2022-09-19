import React from 'react'
import NavBar from '../components/NavBar'

function Main() {
  return (
      <div>
        <div className='absolute w-full h-24 bg-black'>

        </div>
        <div>
          <nav className='absolute w-full top-8 '>
              <ul>
                  <li className='flex float-right justify-betwen mr-11'>
                      <a className='p-2' href="/main">Main</a>
                      <a className='p-2 text-center' href="contacts">Contacts</a>
                      <a className='p-2 text-center' href="about">About</a>
                  </li>
              </ul>
          </nav>
        </div>
        <div className='absolute flex w-full h-full'>
          <title>Main</title>
          
        </div>
      </div>
    
    
        
    
  )
}

export default Main