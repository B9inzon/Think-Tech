import dynamic from "next/dynamic";
import React  from "react";

const LoginForm = dynamic(() => import("@/components/LoginForm/LoginForm"), {
  ssr: false,
});

const LoginView = () => {
  return (
    <div>
      <h2>INICIAR SESIÓN</h2>
      <LoginForm />
    </div>
  );
};

export default LoginView;
