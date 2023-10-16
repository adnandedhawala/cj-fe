import React from "react";
import { useNavigate } from "react-router-dom";

function LoginView() {
  const navigate = useNavigate();
  return (
    <div
      className="m-auto w-fit mt-[50vh] translate-y-[-50%] px-4 py-3 bg-sky-500 rounded-lg
      text-white font-bold text-3xl hover:opacity-75 hover:cursor-pointer"
      onClick={() => navigate("/home/dashboard")}
    >
      Login
    </div>
  );
}

export default LoginView;
