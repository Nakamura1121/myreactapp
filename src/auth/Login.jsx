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
    
    <div className='w-96 mt-72 md:mt-28 lg:mt-56 h-auto bg-white rounded-md text-center p-10'>
     <h1 className='border-b-2 py-2 text-4xl mb-6'>Login</h1>
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
            <button type='submit' onClick={handlerSubmit} className='text-white mt-2 w-48 border-b-2 rounded-lg bg-cyan-600 hover:bg-cyan-500'>Log In</button>
        </form>
            

    </div>
    
    
  )
}

export default Login