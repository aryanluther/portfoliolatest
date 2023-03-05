import React from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import img from "../assets/gbc.jpg";
import img1 from "../assets/rogers.jpg";
import img2 from "../assets/reddice.png";

export default function experience() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-auto"
    >
      <div
        className="lg:mt-32 mt-20 lg:ml-40 lg:pl-8 lg:pr-0 pl-4 pr-4 pb-0
      "
      >
        <div className="fex">
          <div className="overflow-hidden">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-medium lg:text-6xl text-3xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-yellow-700 via-purple-500 to-orange-700
            animate-text"
            >
              Work Experience
            </m.h1>
          </div>
          <div className="pt-4"></div>
          <div className="lg:pt-4">
            <div className="box-border border-2  rounded-xl max-w-4xl shadow-md max-width-4 bg-white">
              <h1 className="font-light lg:p-2 lg:text-4xl text-2xl underline ">
                Rogers
              </h1>
              <div className="flex px-2 ">
                <div
                  className="font-light font-serif lg:text-lg text-md bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-red-700 to-black
            animate-text"
                >
                  <p className="font-thin">Associate</p>
                  <p>
                    ▪ Presented valuable information about product and services
                    which led to 30% higher sales results. Showcased
                    understanding of technologies and processes that can impact
                    customer experience.
                  </p>
                  <p>
                    ▪ Leveraged knowledge is teamwork, interpersonal skills,
                    understanding client needs, Tech and digital savvy.
                  </p>
                </div>
                <div className="pl-4 pb-4 lg:block hidden max-height-md">
                  <Image src={img1} alt="rogers" width={600} height={300} />
                </div>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="lg:pt-4 box-border border-2  rounded-xl max-w-4xl shadow-md max-width-4 bg-white">
              <h1 className="font-light p-2 lg:text-4xl text-2xl underline">
                George Brown
              </h1>
              <div className="flex px-2 ">
                <div
                  className="font-light lg:text-lg text-md bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-blue-700 to-black
            animate-text"
                >
                  <p className="font-thin">Volunteer Software Engineer Tutor</p>
                  <p>
                    ▪ Provided one-on-one support to students who needed extra
                    help, raising the pass rate for my tutees by 5%. Assisted
                    students with their questions regarding Java, C#, and
                    HTML/CSS fundamentals.
                  </p>
                  <p>
                    ▪ Tutored an average of 2 students per session, resulting in
                    a 97% satisfaction rate and conducted code reviews.
                  </p>
                  <p>
                    ▪ Leveraged knowledge is object-oriented programing, Java,
                    C#, JavaScript, and HTML & CSS.
                  </p>
                </div>
                <div className="pl-4 lg:block hidden">
                  <Image className="w-88 h-88" src={img} alt="gbc" />
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div className="lg:mr-1  box-border border-2  rounded-xl max-w-4xl shadow-md max-width-4 bg-white">
                <h1 className="font-light p-2 lg:text-4xl text-2xl underline">
                  Red Dice Media
                </h1>
                <div className="flex px-2 ">
                  <div
                    className="font-light lg:text-lg text-md bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-yellow-700 to-black
            animate-text"
                  >
                    <p className="font-thin">Full Stack Software Engineer</p>
                    <p>
                      ▪ Improved website load time by 80% using new technologies
                      like Next.JS (React) and using asynchronous methods.
                    </p>
                    <p>
                      ▪ Collaborated with developers in agile/scrum team
                      structure to develop scalable application with inclusive
                      of security.
                    </p>
                    <p>
                      ▪ Automated the software development process, resulting in
                      50 % less time spent implementing new features.
                    </p>
                    <p>
                      ▪ Assisted the costs and benefits for different solutions
                      and recommended an appropriate UX designs.
                    </p>
                    <p>
                      ▪ Leveraged knowledge in Full Stack Web Development,
                      JavaScript, HTML&CSS, Restful web services, Git, Docker.
                    </p>
                  </div>
                  <div className="pl-4 p-4 lg:block hidden">
                    <Image className="" src={img2} alt="gbc" width={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
