"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playGroundImg from "@/assets/playground.png";
import { authClient } from "@/lib/auth-client";

const RightSidebar = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className=" text-[16px] md:text-lg font-bold">Login With</h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            className="btn border-blue-400 text-blue-400 text-[10px] md:text-lg p-2 md:p-4"
          >
            <FaGoogle /> Login with Google
          </button>
          <button className="btn text-[10px] md:text-lg p-2 md:p-4" onClick={handleGithubLogin}>
            <FaGithub /> Login with Github
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-[16px] md:text-lg font-semibold">Find Us On</h1>
        <div className="border border-gray-400 rounded-lg">
          <div className="md:p-3 p-1  border-b border-gray-400 flex items-start gap-3">
            <FaFacebook color="blue" />
            <p className="text-xs md:text-lg">Facebook</p>
          </div>
          <div className="md:p-3 p-1 border-b border-gray-400 flex items-start gap-3">
            <FaTwitter color="orange" />
            <p className="text-xs md:text-lg">Twitter</p>
          </div>
          <div className="md:p-3 p-1  flex items-start gap-3">
            <FaInstagram color="red" />
            <p className="text-xs md:text-lg">Instagram</p>
          </div>
        </div>
      </div>
      <div className="space-y-3 bg-base-300 rounded-lg p-2 md:p-5">
        <h1 className="text-[16px] md:text-lg font-semibold">Q-Zone</h1>
        <div className="">
          <Image src={swimmingImg} alt="swimming img"></Image>
        </div>
        <div className="">
          <Image src={classImg} alt="swimming img"></Image>
        </div>
        <div className="">
          <Image src={playGroundImg} alt="swimming img"></Image>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
