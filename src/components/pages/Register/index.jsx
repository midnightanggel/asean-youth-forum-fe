import React from 'react';

function YourComponent() {
  return (
    <div className="h-screen md:flex">
      <img
        src="asianyouth.JPG"
        className="relative overflow-hidden md:flex w-1/2 i justify-around items-center hidden"
      />
      <div className="flex md:w-1/2 justify-around py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-black-800 font-bold text-3xl mb-3 text-center">Get Started With AYF</h1>
          <p className="text-sm font-normal text-center text-gray-600 mb-7">Let's Join US</p>
          <br />
          <div className="flex border-2 py-2 px-3 rounded mb-5">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Full name"
            />
          </div>
          <div className="flex border-2 py-2 px-3 rounded mb-5">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Age"
            />
          </div>
          <div className="flex border-2 py-2 px-3 rounded mb-5">
            <select className="flex w-full text-gray-400 outline-none border-none">
              <option value="1">Country</option>
              <option value="2">INDONESIA</option>
              <option value="3">MALAYSIA</option>
              <option value="4">SINGAPURA</option>
            </select>
          </div>
          <div className="flex border-2 py-2 px-3 rounded mb-5">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded mb-5">
            <input
              className="pl-2 flex w-full outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 22 22"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded mb-8">
            <input
              className="pl-2 flex w-full outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 22 22"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          <button
            type="submit"
            className="mb-5 block w-full bg-green-600 mt-4 py-2 rounded text-white font-semibold mb-8"
          >
            Login
          </button>
          <p className="text-sm text-center">
            Have An Account? <span className="text-green-600">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default YourComponent;