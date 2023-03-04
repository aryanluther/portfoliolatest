import React from "react";

export default function project() {
  return (
    <div className="bg-red">
      <div className="lg:mt-16 mt-4">
        <div className="flex justify-center">
          <div className="pb-1">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative flex bg-white rounded-lg lg:p-2 p-2 lg:px-4 px-2">
                <h1 className="font-serif lg:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black ">
                  Projects
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="lg:ml-3 ml-2 lg:w-8 lg:h-8 w-8 h-8 rotate-6 text-pink-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
