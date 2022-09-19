import React from 'react'

function Register() {
  return (
    <div className='justify-center'>
        <div className='h-auto p-10 text-center bg-white rounded-md justify-flex w-96 '>
        <h1 className='py-2 mb-6 text-4xl border-b-2'>Register</h1>
            <form action="">
                <div className='mt-2 space-y-3'>
                    <input type="text"placeholder='Input your name'/>
                    <input type="text" placeholder='Input your surname'/>
                    <input type="mail" placeholder='enter your mail'/>
                    <input type="password" placeholder='enter your password'/>
                    <input type="password" placeholder='confirm your password'/>

                </div>
                <button type='submit' onClick={event => window.location.href='Confirmation'} className='w-48 mt-2 text-white border-b-2 rounded-lg bg-cyan-600 hover:bg-cyan-500'>Log In</button>
            </form>
        </div>
    </div>
    
  )
}

export default Register