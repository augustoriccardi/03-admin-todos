"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { IoLogIn, IoShieldOutline, IoSquareSharp } from "react-icons/io5";

export const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <IoShieldOutline />
        <span className="group-hover:text-gray-700  ">Espere</span>
      </button>
    );
  }

  if (status === "unauthenticated") {
    return redirect("/api/auth/signin");
    // return (
    //   <button
    //     onClick={() => signIn()}
    //     className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group  border border-gray-300
    //     dark:border-dotted w-full hover:text-sky-700"
    //   >
    //     <IoLogIn size={20} />
    //     <span className="group-hover:text-gray-700 ">Ingresar</span>
    //   </button>
    // );
  }

  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group  border border-gray-300 
      dark:border-dotted w-full hover:text-red-700"
    >
      <CiLogout />
      <span className="">Logout</span>
    </button>
  );
};
