import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex p-5 items-center justify-center bg-white w-full">
      <div className="text-center">
        <div className="inline-flex rounded-full ">
          <div className="rounded-full  ">
            <img
              src="/images/PageNotFound.gif"
              className="max-w-[200px] md:max-w-[400px]"
              alt="not-found"
            />
          </div>
        </div>
        <h1 className=" text-28 md:text-[36px] font-bold text-slate-800 lg:text-[50px]">
          404 - Page not found
        </h1>
        <p className="text-slate-600 mt-1 lg:text-lg">
          The page you are looking for doesn&apos;t exist or <br />
          has been removed.
        </p>
        <Link to="/" className="my-5 w-full btn btn-black">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
