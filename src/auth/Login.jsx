import React from 'react'

const Login = () => {

  return (
    
    <div className='w-96 mt-72 md:mt-28 lg:mt-56 h-auto bg-white rounded-md text-center p-10'>
     <h1 className='border-b-2 py-2 text-4xl mb-6'>Login</h1>
        <div className='mt-2 space-y-3'>
            <input className='border-b-2 p-2 outline-none hover:border-fuchsia-600' type="email" name="Mail" id="1" placeholder='Enter Your E-mail' />
            <input className='border-b-2 p-2 outline-none hover:border-fuchsia-600' type="password" name="Password" id="2" placeholder='Enter Your Password' />
            
        </div>
        <button className='text-white mt-2 w-48 border-b-2 rounded-lg bg-cyan-600 hover:bg-cyan-500'>Log In</button>
    </div>
    
    
  )
}

export default Login