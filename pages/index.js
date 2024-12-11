import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import img from "../public/Student_coat_photo.jpg"; // Import your image

import Image from "next/image";

import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Neha Chaudhari - Portfolio</title>
        <meta name="description" content="Neha Chaudhari's Portfolio - Showcasing Skills and Expertise" />
      </Head>

      <main className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40">
        {/* Navigation */}
        <motion.nav
          className="flex justify-between py-10 mb-12 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl text-teal-500 font-burtons">Neha Chaudhari</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="text-2xl text-yellow-500 cursor-pointer"
              />
            </li>
            <li>
              <a
                className="px-4 py-2 ml-8 text-white border-none rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                href="#"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/RenderCV_sb2nov_Theme__1_.pdf"; // Path to your PDF file
                  link.download = "RenderCV_sb2nov_Theme__1_.pdf"; // Optional: specify the download name
                  link.click();
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* Introduction Section */}
        <motion.section
          className="py-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">
            Neha Chaudhari
          </h2>
          <h3 className="py-2 text-2xl text-purple-600 dark:text-purple-400 md:text-3xl">
            Full-Stack Developer | Software Engineer | Passionate About Design
          </h3>
          <p className="max-w-xl py-5 mx-auto text-gray-700 text-md dark:text-gray-300">
            A software engineer and passionate artist working with cutting-edge technologies to create seamless web solutions. Join me in exploring the fusion of code and design!
          </p>
          <motion.div
            className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <Image
              src={img}
              alt="Neha Chaudhari"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.section>

        {/* "Where Innovation Meets Passion" Section */}
        <motion.section
          className="py-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="py-4 text-3xl text-indigo-600 dark:text-indigo-400">Where Innovation Meets Passion: My Portfolio</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200">
            "Every line of code tells a story of innovation and progress." I am a passionate software engineer with a love for coding and problem-solving.
          </p>
        </motion.section>

        {/* Coding Profiles Section */}
        <motion.section
          className="py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="py-2 text-3xl text-teal-500 dark:text-teal-400">Check out my Coding Profiles</h3>
          <div className="flex justify-center gap-10">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="py-2 text-xl text-yellow-500"> <a href="https://leetcode.com/u/Neha_SoftwareEngineer/" target="_blank" rel="noopener noreferrer">LeetCode</a></h4>
              <p className="text-gray-600 dark:text-gray-300">Level up your algorithm skills!</p>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="py-2 text-xl text-orange-500"> <a href="https://www.codechef.com/users/algoexplorer" target="_blank" rel="noopener noreferrer">CodeChef</a></h4>
              <p className="text-gray-600 dark:text-gray-300">Practice coding with contests!</p>
            </motion.div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          className="py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="py-2 text-3xl text-indigo-600 dark:text-indigo-400">About Me</h3>
          <p className="py-2 leading-8 text-gray-700 text-md dark:text-gray-300">
            I am a recent graduate in Computer Science & Engineering from Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, Maharashtra. I'm always eager to learn new technologies and leverage my skills to solve real-world problems.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="py-2 text-3xl text-teal-500 dark:text-teal-400">Skills</h3>
          <p className="py-2 leading-8 text-gray-600 text-md dark:text-gray-200">
            Crafting code, mastering skills—let’s build something extraordinary!
          </p>
          <ul className="pl-6 text-gray-800 list-disc dark:text-gray-200">
            <li className="text-blue-500">C/C++</li>
            <li className="text-yellow-500">DSA</li>
            <li className="text-green-500">C#</li>
            <li className="text-teal-500">React.js</li>
            <li className="text-indigo-500">JavaScript</li>
          </ul>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="py-2 text-3xl text-indigo-600 dark:text-indigo-400">Certifications</h3>
          <p className="py-2 leading-8 text-gray-600 text-md dark:text-gray-200">
            Unlocking new skills, one certification at a time!
          </p>
          <ul className="pl-6 text-gray-800 list-disc dark:text-gray-200">
            <li>
              <a href="#" className="text-teal-500">4.0 Tech Bootcamp Certificate</a> - Certificate earned for completing the 4.0 Tech Bootcamp.
            </li>
            <li>
              <a href="#" className="text-teal-500">IBM Cloud Essentials</a> - Certificate earned for completing the IBM Cloud Essentials course.
            </li>
            <li>
              <a href="#" className="text-teal-500">MATLAB Course Certificate</a> - Completed a MATLAB course arranged by the university.
            </li>
          </ul>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="py-2 text-3xl text-teal-500 dark:text-teal-400">Projects</h3>
          <p className="py-2 leading-8 text-gray-600 text-md dark:text-gray-200">
            Turning ideas into reality, one project at a time!
          </p>
          <div className="gap-10 lg:flex">
            <motion.div
              className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="py-2 text-xl font-medium text-teal-600">Notes Making Website</h4>
              <p className="text-gray-700 dark:text-gray-500">Built a notes-making website using JWT authentication and CRUD operations with MERN stack.</p>
            </motion.div>
            <motion.div
              className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="py-2 text-xl font-medium text-teal-600">Web Portfolio</h4>
              <p className="text-gray-700 dark:text-gray-500">Created a personal portfolio website with HTML, CSS, and JavaScript.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Section */}
        <motion.footer
          className="py-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl text-teal-500 dark:text-teal-400">Follow Me</h3>
          <div className="flex justify-center gap-6 py-4">
           
            <a href="https://www.linkedin.com/in/neha26369456/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-3xl text-blue-700" />
            </a>
            <a href="https://github.com/newtechlearne" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-3xl text-red-600" />
            </a>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
