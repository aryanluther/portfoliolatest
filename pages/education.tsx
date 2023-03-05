import React from "react";
import { motion as m } from "framer-motion";

export default function education() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <div className="lg:mt-32 mt-20 lg:ml-40 lg:pl-8 pl-4">
        <div className="flex">
          <div className="pb-1">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative flex bg-white rounded-lg lg:p-2 p-2 lg:px-4 px-2 overflow-hidden">
                <m.h1
                  animate={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="font-serif lg:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black "
                >
                  Education
                </m.h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="lg:ml-3 ml-2 lg:w-12 lg:h-12 w-8 h-8 rotate-6 text-pink-400"
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
        <div className="lg:mt-4 mt-2">
          <h1 className="font-light lg:text-4xl text-2xl">George Brown</h1>
          <div className="lg:mt-4 mt-2">
            <p className="font-light lg:text-xl text-md">
              Graduated in the field of Computer Science
            </p>
          </div>
          <div className="lg:mt-4 mt-2">
            <h2 className="font-light lg:text-2xl underline decoration-pink-500/30 ">
              Some of my Intersting Course Work
            </h2>
            <div className="lg:pl-2 pl-1">
              <div className="lg:p-2 ">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <p
                    className="lg:ml-4 ml-2 font-medium lg:text-xl text-sm bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-purple-500 to-black
            animate-text"
                  >
                    COMP 1230 Advanced Web Programing
                  </p>
                </div>
                <p className="ml-10 font-light lg:text-xl">
                  Learned everything about Full-Stack development.
                </p>
                <p className="flex ml-10 font-light lg:text-xl">
                  Highlights: JS framework - (React, Angular, Express), Rest
                  API, Mongo DB, Authentication.
                </p>
              </div>
            </div>
            <div className="lg:pl-2 pl-1">
              <div className="lg:p-2 p-1">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <p
                    className="lg:ml-4 ml-2 font-medium lg:text-xl text-sm bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-purple-500 to-black
            animate-text"
                  >
                    COMP 2130 Application Development using Java
                  </p>
                </div>
                <p className="ml-10 font-light lg:text-xl">
                  Learned everything about Java Spring boot frame work.
                </p>
                <p className="flex ml-10 font-light lg:text-xl">
                  Highlights: Java, SQL and Database Management System.
                </p>
              </div>
            </div>
            <div className="lg:pl-2 pl-1">
              <div className="lg:p-2 p-1">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <p
                    className="lg:ml-4 ml-2 font-medium lg:text-xl text-sm bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-purple-500 to-black
            animate-text"
                  >
                    COMP 2147 System Analysis, Design And Testing
                  </p>
                </div>
                <p className="ml-10 font-light lg:text-xl">
                  Learned everything about Continous integration and
                  development.
                </p>
                <p className="flex ml-10 font-light lg:text-xl">
                  Highlights: Docker, Jenkins, System planning, Analysis, desing
                  and implementaion
                </p>
              </div>
            </div>
            <div className="lg:pl-2 pl-1">
              <div className="lg:p-2 p-1">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <p
                    className="lg:ml-4 ml-2 font-medium lg:text-xl text-sm bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-purple-500 to-black
            animate-text"
                  >
                    COMP 3132 Applied Machine Learning
                  </p>
                </div>
                <p className="ml-10 font-light lg:text-xl">
                  Learned everything about AI and Deep Learning.
                </p>
                <p className="flex ml-10 font-light lg:text-xl">
                  Highlights: Python, machine learning and data science.
                </p>
              </div>
            </div>
            <div className="lg:pl-2 pl-1">
              <div className="lg:p-2 p-1">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <p
                    className="lg:ml-4 ml-2 font-medium lg:text-xl text-sm bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-purple-500 to-black
            animate-text"
                  >
                    COMP 2151 Agile Software Development
                  </p>
                </div>
                <p className="ml-10 font-light lg:text-xl">
                  Learned everything about standups and scrum meetings.
                </p>
                <p className="flex ml-10 font-light lg:text-xl">
                  Highlights: Six phases of development - Concept, Inception,
                  Iteration, Release, Maintenance and Retirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
