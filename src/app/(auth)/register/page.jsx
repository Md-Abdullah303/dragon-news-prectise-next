"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLoginFormSubmit = (data) => {
    console.log(data);
};
// console.log(errors, 'error');

  return (
    <div className="container mx-auto h-[80vh] flex items-center justify-center">
      <div className="bg-[#F3F3F3] p-20 w-[45%] rounded-xl space-y-3.5">
        <h1 className="text-3xl text-center font-semibold">Register your account</h1>
        <hr className="text-gray-400" />
        <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
            {/* name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
            {...register("name", { required: "name Recomendent"})}
              type="text"
              className="input outline-none border-none w-full"
              placeholder="Enter Your Name"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </fieldset>
          {/* Photo URL */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Photo URL</legend>
            <input
            {...register("photo", { required: "photo Recomendent"})}
              type="text"
              className="input outline-none border-none w-full"
              placeholder="Enter Your Photo URL"
            />
            {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
          </fieldset>
          {/* email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
            {...register("email", { required: "email Recomendent"})}
              type="email"
              className="input outline-none border-none w-full"
              placeholder="Enter Your Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </fieldset>
          {/* password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
            {...register("password", { required: "Password must be needed" })}
              type="password"
              className="input outline-none border-none w-full"
              placeholder="Enter Your Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
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

export default RegisterPage;
