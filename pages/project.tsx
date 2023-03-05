import React from "react";
import { motion as m } from "framer-motion";

export default function project() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <div className="lg:mt-32 mt-20 pb-12">
        <div className="flex justify-center">
          <div className="pb-">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/50 to-cyan-500/50 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative flex bg-white rounded-lg lg:p-2 p-2 lg:px-4 px-2 overflow-hidden">
                <m.h1
                  animate={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="font-serif lg:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black "
                >
                  Projects
                </m.h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center content-center">
        <div className="grid lg:grid-cols-2 lg:grid-row-2  gap-8">
          <div className="border bg-white rounded-lg h-64 w-96 p-4 shadow-xl shadow-cyan-500/50">
            <div>
              <div className="flex justify-center pb-4">
                <h1 className="font-bold underline text-lg">
                  AUTOMATED CHATBOT
                </h1>
              </div>
              <p className="pt-2">
                Constructed a model that can automatically pick the appropriate
                response to a customer complaint with an accuracy of 87%.
              </p>
              <p className="pt-2">
                Used machine learning to develop a predictive model that
                forecasted user behaviour with 80% accuracy.
              </p>
            </div>
          </div>
          <div className="border  bg-white rounded-lg h-64 w-96 p-4 shadow-xl shadow-orange-500/50">
            <div>
              <div className="flex justify-center pb-4">
                <h1 className="font-bold text-lg underline">MP3 PLAYER</h1>
              </div>
              <p className="pt-2">
                Led a team to develop music application with offline and online
                playing capability
              </p>
              <p className="pt-2">
                Music is stored on the device using SQL lite to manage data
                easily and added offline playing capability, Integrated JWT web
                token for the user login information to increase the security.
              </p>
            </div>
          </div>
          <div className="border  bg-white rounded-lg h-64 w-96 p-4 shadow-xl shadow-orange-500/50">
            <div>
              <div className="flex justify-center pb-4">
                <h1 className="font-bold underline text-lg">TODO APP</h1>
              </div>
              <p className="pt-2">
                Developed a model so that user can create to do list based on
                their subjects and get their assignment/test preparation done on
                time so that they can achieve higher grades.
              </p>
              <p className="pt-2">
                React native for the frontend framework, Tailwind CSS for
                styling and node JS for backend framework, mongo Db.
              </p>
            </div>
          </div>
          <div className="border  bg-white rounded-lg h-64 w-96 p-4 shadow-xl shadow-cyan-500/50">
            <div>
              <div className="flex justify-center pb-4">
                <h1 className="font-bold underline text-lg">
                  BLOGPOST WEBSITE
                </h1>
              </div>
              <p className="pt-2">
                Created an interactive online platform to post blogs. Developed
                a Graph QL content API to fetch data from an online platform,
                which increase efficiency by 25%.
              </p>
              <p className="pt-2">
                Maintained a blog website which helped in showcasing my projects
                with detailed explanation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
