import Nav from "@/components/Nav";
import React from "react";
import loginHeaderImg from "../../assets/images/login-headerImg.png";
import InputField from "@/components/InputField";

const Login = () => {
  return (
    <>
      <Nav />
      <main className="pt-24 px-8 lg:px-0 lg:pt-0 flex justify-between">
        <div className="w-full lg:w-[55%] lg:pt-24 lg:px-16 lg:flex lg:flex-col lg:items-center lg:justify-center pb-8 ">
          <span className="text-center">
            <h1 className="text-3xl md:text-4xl">Welcome Back!</h1>
            <p className="text-gray-600 font-extralight md:text-lg">
              ready to shop with us again?
            </p>
          </span>
          <div className="mt-8 border rounded-sm p-6 w-full border-gray-300 ">
            <h1 className=" text-4xl font-semibold">Login</h1>
            <InputField>
              {[
                {
                  key: 1,
                  id: "email",
                  type: "email",
                  labelValue: "Email Address",
                  placeholder: "eg. johndoe@email.com",
                },
                {
                  key: 2,
                  id: "pwd",
                  type: "password",
                  labelValue: "Password",
                  placeholder: "**********",
                },
              ]}
            </InputField>
          </div>
        </div>
        <div className="relative bg-[#FFEDE1] min-h-screen hidden lg:flex w-[40%]">
          <img src={loginHeaderImg} className="absolute w-full self-end -left-40 top-0" />
        </div>
      </main>
    </>
  );
};

export default Login;
