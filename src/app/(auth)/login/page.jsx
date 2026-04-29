"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";


const LoginPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFormSubmit = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
    if(error){
        alert(error.message)
    }
  };

  return (
    <div className="container mx-auto h-[80vh] flex items-center justify-center">
      <div className="bg-[#F3F3F3] p-20 w-[45%] rounded-xl space-y-3.5">
        <h1 className="text-3xl text-center font-medium">Login your account</h1>
        <hr className="text-gray-400" />
        <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
          {/* email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              {...register("email", { required: "email Recomendent" })}
              type="email"
              className="input outline-none border-none w-full"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          {/* password */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", { required: "Password must be needed" })}
              type={isShowPassword ? "text" : "password"}
              className="input outline-none border-none w-full"
              placeholder="Enter Your Password"
            />
            <span onClick={()=> setIsShowPassword(!isShowPassword)}>{isShowPassword ? <IoEyeOff className="absolute text-lg top-4 right-2.5 cursor-pointer" /> : <IoEye className="absolute text-lg top-4 right-2.5 cursor-pointer" />}</span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button
            type="submit"
            className="btn w-full mt-3 bg-slate-800 text-white"
          >
            Login
          </button>
        </form>
        <p>
          Dont’t Have An Account ?{" "}
          <Link href={"/register"}>
            <span className="text-blue-400">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
