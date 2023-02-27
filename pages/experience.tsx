import React from "react";
import Image from "next/image";

export default function experience() {
  return (
    <div className="lg:mt-8 mt-4 lg:ml-40 lg:pl-8 pl-4">
      <div className="fex ">
        <div>
          <h1
            className="font-medium lg:text-6xl text-3xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-purple-500 to-black
            animate-text"
          >
            Work Experience
          </h1>
        </div>
        <div className="lg:pt-4">
          <div className="box-border border-2  rounded-xl max-w-4xl shadow-md max-width-4">
            <h1 className="font-light lg:p-2 lg:text-4xl text-2xl underline ">
              Rogers
            </h1>
            <div className="flex px-2 ">
              <div className="font-light font-serif text-lg">
                <p>
                  ▪ Presented valuable information about product and services
                  which led to 30% higher sales results. Showcased understanding
                  of technologies and processes that can impact customer
                  experience.
                </p>
                <p>
                  ▪ Leveraged knowledge is teamwork, interpersonal skills,
                  understanding client needs, Tech and digital savvy.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pt-4 box-border border-2  rounded-xl max-w-4xl shadow-md max-width-4">
            <h1 className="font-light p-2 lg:text-4xl text-2xl underline">
              George Brown
            </h1>
            <div className="flex px-2 ">
              <div className="font-light text-lg">
                <p className="font-thin">Volunteer Software Engineer Tutor</p>
                <p>
                  ▪ Provided one-on-one support to students who needed extra
                  help, raising the pass rate for my tutees by 5%. Assisted
                  students with their questions regarding Java, C#, and HTML/CSS
                  fundamentals.
                </p>
                <p>
                  ▪ Tutored an average of 2 students per session, resulting in a
                  97% satisfaction rate and conducted code reviews.
                </p>
                <p>
                  ▪ Leveraged knowledge is object-oriented programing, Java, C#,
                  JavaScript, and HTML & CSS.
                </p>
              </div>
              <Image
                src="/assets/gbc-logo.jpg"
                alt="landscape"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="lg:mr-1 mr-4 box-border border-2  rounded-xl max-w-4xl shadow-md max-width-4">
            <h1 className="font-light p-2 lg:text-4xl text-2xl underline">
              Red Dice Media
            </h1>
            <div className="flex px-2 ">
              <div className="font-light text-lg">
                <p className="font-thin">Full Stack Software Engineer</p>
                <p>
                  ▪ Improved website load time by 80% using new technologies
                  like Next.JS (React) and using asynchronous methods.
                </p>
                <p>
                  ▪ Collaborated with developers in agile/scrum team structure
                  to develop scalable application with inclusive of security.
                </p>
                <p>
                  ▪ Automated the software development process, resulting in 50
                  % less time spent implementing new features.
                </p>
                <p>
                  ▪ Assisted the costs and benefits for different solutions and
                  recommended an appropriate UX designs.
                </p>
                <p>
                  ▪ Leveraged knowledge in Full Stack Web Development,
                  JavaScript, HTML&CSS, Restful web services, Git, Docker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
