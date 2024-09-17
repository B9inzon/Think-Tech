import RegisterForm from '@/components/RegisterForm/RegisterForm'
import React from 'react'

const RegisterView = () => {
  return (
    <div className='flex flex-col items-center content-center w-screen h-full mt-8'> 
      <h2 className='text-3xl font-semibold text-[#363537] '>REGISTRARSE</h2>
      <RegisterForm/>
    </div>
  )
}

export default RegisterView