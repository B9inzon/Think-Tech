import RegisterForm from '@/components/RegisterForm/RegisterForm'
import Link from 'next/link';
import React from 'react'

const RegisterView = () => {
  return (
    <div className="flex flex-row  h-screen w-screen">
    <div className="flex flex-col pl-52 font-semibold text-6xl text-start justify-center w-[60%] h-full">
      <h1>¡Hola!</h1>
      <h1>¡Qué gusto que estés aquí!</h1>
    </div>
    <div className='flex flex-col items-center content-center justify-center w-[40%] h-full '>
      <h2 className='text-3xl font-semibold text-[#363537] my-5'>Registrarse</h2>
      <p className='pb-2'>¿Ya tienes una cuenta? <Link href={"/login"} className="text-emerald-500 hover:underline font-semibold">Iniciar sesión</Link></p>
      <RegisterForm />
    </div>
    </div>
  );
};

export default RegisterView