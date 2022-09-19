import React, { useEffect, useRef, useState } from 'react'

const Login = () => {
const [mail, setMail] = useState('')
const [password, setPassword] = useState('')
const [formInputValidate, setFormInputValidate] = useState({
    inputValue: true,
    inputValue2: true
})
const isEmpty=(value) => value.trim()==='';



useEffect(() => {
    
}, [mail])

const handlerSubmit = (e) => {
    e.preventDefault ()
    const enterMailIsValid=!isEmpty(mail)
    const enterPasswordIsValid =!isEmpty(password)
    setFormInputValidate({
        mail: enterMailIsValid,
        password: enterPasswordIsValid
    })
    const formIsValid=enterMailIsValid && enterPasswordIsValid
    if (!formIsValid) {
        return;
    }
    console.log(password)
}

  return (
    
    <div className='h-auto p-10 text-center bg-white rounded-md w-96 mt-72 md:mt-28 lg:mt-56'>
     <h1 className='py-2 mb-6 text-4xl border-b-2'>Login</h1>
        <form action="">
            <div className='mt-2 space-y-3'>
                <input  value={mail} onChange={(e) => setMail(e.target.value)} className={
                !formInputValidate.mail
                ? 'border-b-red-700'
                : 'border-b-2 p-2 outline-none hover:border-fuchsia-600'
            }
                 type="email" name="Mail" id="1" placeholder='Enter Your E-mail' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} 
                className={
                    password
                    ? 'border-b-red-700'
                   : 'border-b-2 p-2 outline-none hover:border-fuchsia-600'
                    } 
                    type="password" name="Password" id="2" placeholder='Enter Your Password' />  

            </div>
            <button type='submit' onClick={event => window.location.href='main'} className='w-48 mt-2 text-white border-b-2 rounded-lg bg-cyan-600 hover:bg-cyan-500'>Log In</button>
            <nav>
                <ul>
                    <li>
                        <a href="Register">Register</a>
                    </li>
                </ul>
            </nav>
        </form>
            

    </div>
    
    
  )
}

export default Login