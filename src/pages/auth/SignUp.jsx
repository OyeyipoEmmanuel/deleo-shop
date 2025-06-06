import InputField from "@/components/InputField";
import Nav from "@/components/Nav";
import React from "react";
import { Link } from "react-router-dom";
import loginHeaderImg from "../../assets/images/login-headerImg.png";

const SignUp = () => {
  return (
    <>
      <Nav />
      <main className="pt-24 px-8 lg:px-0 lg:pt-0 flex justify-between">
        <div className="w-full lg:w-[55%] lg:pt-24 lg:px-16 lg:flex lg:flex-col lg:items-center lg:justify-center pb-8 ">
          <span className="text-center">
            <h1 className="text-3xl md:text-4xl">
              Yayy! You're on track, keep going🚀
            </h1>
          </span>
          <div className="mt-8 border rounded-sm p-6 w-full border-gray-300 ">
            <h1 className=" text-4xl font-semibold">Sign-Up</h1>
            <InputField buttonName="Sign-Up">
              {[
                {
                  key: 1,
                  id: "username",
                  type: "text",
                  labelValue: "Username",
                  placeholder: "eg. @deleotech",
                },
                {
                  key: 2,
                  id: "email",
                  type: "email",
                  labelValue: "Email Address",
                  placeholder: "eg. johndoe@email.com",
                },
                {
                  key: 3,
                  id: "pwd",
                  type: "password",
                  labelValue: "Password",
                  placeholder: "**********",
                },
              ]}
            </InputField>

            <div className="mt-5">
              <h1 className="text-center text-xl ">Already have an account?</h1>
              <Link to="/login">
                <p className="pt-2 text-center text-sm underline cursor-pointer font-semibold hover:text-purple-700 hover:transition-all duration-300">
                  Login 
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative bg-[#FFEDE1] min-h-screen hidden lg:flex w-[40%]">
          <img
            src={loginHeaderImg}
            className="absolute w-full self-end -left-40 top-0"
          />
        </div>
      </main>
    </>
  );
};

export default SignUp;
