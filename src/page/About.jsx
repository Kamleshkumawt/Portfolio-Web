// const badgeList = [
//   {
//     src: "https://img.shields.io/badge/MERN-Stack-3DDC84?style=for-the-badge&logo=mongodb&logoColor=white",
//     alt: "MERN Stack",
//   },
//   {
//     src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
//     alt: "Node.js",
//   },
//   {
//     src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
//     alt: "React",
//   },
//   {
//     src: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
//     alt: "Express.js",
//   },
//   {
//     src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
//     alt: "MySQL",
//   },
//   {
//     src: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
//     alt: "MongoDB",
//   },
//   {
//     src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
//     alt: "JavaScript",
//   },
//   {
//     src: "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
//     alt: "Tailwind CSS",
//   },
//   {
//     src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
//     alt: "Bootstrap",
//   },
//   {
//     src: "https://img.shields.io/badge/Framer_Motion-EA4C89?style=for-the-badge&logo=framer&logoColor=white",
//     alt: "Framer Motion",
//   },
//   {
//     src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
//     alt: "TypeScript",
//   },
//   {
//     src: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
//     alt: "C",
//   },
//   {
//     src: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
//     alt: "C++",
//   },
// ];

const About = () => {
  return (
    <div
      className="h-full max-w-full flex flex-col gap-5 items-start justify-center px-2 py-8 md:px-8 md:py-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <h1
        className="text-2xl z-50 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 mt-10  text-center border-l-amber-300 border-l-4 pl-2"  
        // bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent
      >
        About Me
      </h1>
      <p
        className="max-w-md sm:max-w-xl md:max-w-7xl text-sm sm:text-lg md:text-xl font-medium text-gray-200 text-start leading-relaxed px-2"
      >
        I am a passionate and driven{" "}
        <span className="font-semibold text-green-400">MERN Stack Developer</span>{" "}
        with 1 year of experience in building dynamic and scalable web applications. I have hands-on experience working with{" "}
        <span className="font-semibold text-blue-400">Node.js</span>,{" "}
        <span className="font-semibold text-green-400">MongoDB</span>,{" "}
        <span className="font-semibold text-blue-300">MySQL</span>, and{" "}
        <span className="font-semibold text-cyan-400">React</span>, and am continually expanding my skills to stay updated with the latest trends in web development.
        <br />
        <br />
        In addition to my core stack, I am proficient in{" "}
        <span className="font-semibold text-yellow-300">JavaScript</span>,{" "}
        <span className="font-semibold text-gray-300">Express.js</span>,{" "}
        <span className="font-semibold text-teal-300">Tailwind CSS</span>,{" "}
        <span className="font-semibold text-purple-300">Bootstrap</span>, and{" "}
        <span className="font-semibold text-pink-400">Framer Motion</span> for creating responsive, user-friendly, and visually appealing web applications. I am also learning{" "}
        <span className="font-semibold text-red-400">Cybersecurity</span> to enhance my ability to develop secure applications and systems.
        <br />
        <br />
        I have a strong foundation in{" "}
        <span className="font-semibold text-blue-400">C</span>,{" "}
        <span className="font-semibold text-blue-400">C++</span>, and Object-Oriented Programming (OOP), with a solid understanding of Data Structures & Algorithms. My goal is to leverage this knowledge to build scalable, efficient, and secure applications.
        <br />
        <br />
        I am always excited to learn new technologies and am currently exploring{" "}
        <span className="font-semibold text-cyan-300">DaisyUI</span> and{" "}
        <span className="font-semibold text-teal-300">Tailwind CSS</span> to create better user interfaces. I am looking for opportunities to apply my skills in real-world projects and collaborate with others in the tech community.
      </p>
      
      {/* <div
        className="w-full flex flex-col items-start gap-5 mt-8"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-start border-l-amber-300 border-l-4 pl-2">
          My Tech Stack
        </h2>
        <div className="flex flex-wrap justify-start gap-2 sm:gap-3 px-2">
          {badgeList.map((badge, idx) => (
            <img
              key={idx}
              src={badge.src}
              alt={badge.alt}
              className="h-6 sm:h-8 md:h-10"
              loading="lazy"
            />
          ))}
        </div>
        <div className="mt-4 text-center text-sm sm:text-base md:text-lg text-gray-300 px-2">
          MERN Stack Developer | Node.js & Backend Developer | React | Express.js |
          MySQL | MongoDB | Data Structures | Problem Solver
        </div>
      </div> */}
    </div>
  );
};

export default About;