import React from "react";
import { FcGoogle } from "react-icons/fc";
import ButtonUI from "./ButtonUI";
import { Link } from "react-router-dom";


const InputField = (props) => {
  return (
    <form>
      <div className="mt-6 flex flex-col space-y-4">
        {props.children.map((eachField) => (
          <span key={eachField.key}>
            <label htmlFor={eachField.id} className="text-lg ">
              {eachField.labelValue}
            </label>
            <input
              type={eachField.type}
              id={eachField.id}
              className="mt-1 w-full border rounded-sm px-3 py-1 border-gray-500 outline-none"
              placeholder={eachField.placeholder}
            />
          </span>
        ))}
        <ButtonUI btnName="Login"/>
        <p className="text-center text-sm underline cursor-pointer font-semibold hover:text-purple-700 hover:transition-all duration-300">Forgot Password?</p>
      </div>

      <div className="flex space-x-1 items-center mt-2">
        <span className="h-[1px] w-full bg-black/30"></span>
        <p>OR</p>
        <span className="h-[1px] w-full bg-black/30"></span>
      </div>

      <div className="text-center w-full mt-1">
        <p className="text-md text-gray-800">Login with </p>
        <FcGoogle className="text-center mx-auto mt-3 text-4xl p-1 bg-gray-200 rounded-full hover:opacity-70 cursor-pointer hover:transition-all hover:duration-200"/>
      </div>

       <div className="flex space-x-1 items-center mt-4">
        <span className="h-[1px] w-full bg-black/30"></span>
        <p>OR</p>
        <span className="h-[1px] w-full bg-black/30"></span>
      </div>

      <div className="mt-1">
        <h1 className="text-center text-xl ">Don't have an account?</h1>
        <Link to="/signup"><p className="pt-2 text-center text-sm underline cursor-pointer font-semibold hover:text-purple-700 hover:transition-all duration-300">Sign-Up</p></Link>
      </div>
    </form>
  );
};

export default InputField;
