
import LoginForm from "@/components/LoginForm/LoginForm";
import React from "react";





const LoginView = () => {
  return (
    <div className='flex flex-col items-center content-center w-screen h-full m-8'>
      <h2 className='text-3xl font-semibold text-[#363537] my-5'>INICIAR SESIÓN</h2>
      <LoginForm />
    </div>
  );
};

export default LoginView;
