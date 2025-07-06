import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/image.png';

const About = () => {
  return (
    <section
      id="about"
      className="pt-28 pb-2 md:pb-16 text-white font-sans bg-transparent"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Aryan Behera
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "Web Developer",
                "App Developer",
                "SDE-1 Aspirant",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            A passionate Computer Science student with a strong foundation in
            Java, Data Structures & Algorithms, and Full-Stack Web Development.
            I love building practical, scalable projects and continuously
            learning new technologies. With 500+ DSA problems solved and
            hands-on experience in React, Node.js, and databases, I'm actively
            seeking an SDE-1 role to apply my skills and grow as a developer.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 4px #8245ec, 0 0 10px #8245ec, 0 0 25px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Aryan Behera"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
