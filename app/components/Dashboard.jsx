"use client";

import Lottie from "lottie-react";
import Bird from "../../public/bird.json";
import Feature from "./Feature";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Dashboard() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const style = {
    height: "90%",
  };
  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace("/auth/login");
    }
  }, [isLoggedIn]);
  return (
    <div className=" max-h-[85vh] overflow-y-scroll">
      <div className="flex h-[85vh]">
        <div className="w-1/2 ">
          <div className=" h-full">
            <Lottie style={style} animationData={Bird} loop={true} />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <div className="max-w-xl text-wrap ">
            <span className="text-6xl ">
              {" "}
              Convert your pdf <span className="text-blue-500">Now</span>
            </span>
          </div>
          <div className="text-wrap max-w-lg text-sm">
            <span className="text-bold font-body text-xl">
              {isLoggedIn
                ? `Welcome ${user?.username}`
                : "Please login to continue"}
            </span>
          </div>
          <div className="flex flex-col gap-2 max-w-lg">
            <span className="text-xs">Don't have an account? </span>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Sign Up
            </button>
            <span>
              If signed up,{" "}
              <Link href="/login" className="border-b border-dotted">
                login
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex px-10">
          <div className="bg-blue-600 shadow-blue-500/50 dark:shadow-lg h-10 w-2"></div>
          <span className="ml-4 text-4xl">Feature</span>
        </div>
        <div className="my-10 mx-2">
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
