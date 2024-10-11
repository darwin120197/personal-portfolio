import { FaHtml5, FaCss3Alt, FaArrowRightLong } from "react-icons/fa6";
import { FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite, SiPhp, SiXampp, SiMysql } from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { RiNpmjsFill } from "react-icons/ri";
import { BiSolidFileJson, BiLogoNetlify } from "react-icons/bi";
import { SiVitest } from "react-icons/si";

const Technologies = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#E44D26",
    textShadow: "0 0 20px rgba(228, 77, 38, 0.5)",
    link: "https://html.com/",
    target: "_blank",
    aosDelay: "100",
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#1572B6",
    textShadow: "0 0 20px rgba(21, 114, 182, 0.5)",
    link: "https://www.w3.org/Style/CSS/",
    target: "_blank",
    aosDelay: "200",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    color: "#F7DF1E",
    textShadow: "0 0 20px rgba(247, 223, 30, 0.5)",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    target: "_blank",
    aosDelay: "300",
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
    textShadow: "0 0 20px rgba(97, 218, 251, 0.5)",
    link: "https://reactjs.org/",
    target: "_blank",
    aosDelay: "400",
  },
  {
    id: 5,
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    color: "#38B2AC",
    textShadow: "0 0 20px rgba(56, 178, 172, 0.5)",
    link: "https://tailwindcss.com/",
    target: "_blank",
    aosDelay: "500",
  },
  {
    id: 6,
    name: "Vite",
    icon: <SiVite />,
    color: "#646CFF",
    textShadow: "0 0 20px rgba(56, 178, 172, 0.5)",
    link: "https://vitejs.dev/",
    target: "_blank",
    aosDelay: "600",
  },
  {
    id: 7,
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    textShadow: "0 0 20px rgba(240, 80, 50, 0.5)",
    link: "https://git-scm.com/",
    target: "_blank",
    aosDelay: "700",
  },
  {
    id: 8,
    name: "Github",
    icon: <FaGithub />,
    color: "#F8F8F0",
    textShadow: "0 0 20px rgba(248, 248, 240, 0.5)",
    link: "https://github.com/",
    target: "_blank",
    aosDelay: "800",
  },
  {
    id: 9,
    name: "NPM",
    icon: <RiNpmjsFill />,
    color: "#CB3837",
    textShadow: "0 0 20px rgba(203, 56, 55, 0.5)",
    link: "https://www.npmjs.com/",
    target: "_blank",
    aosDelay: "900",
  },
  {
    id: 10,
    name: "JSON",
    icon: <BiSolidFileJson />,
    color: "#B5B5B5",
    textShadow: "0 0 20px rgba(181, 181, 181, 0.5)",
    link: "https://www.npmjs.com/package/json-server",
    target: "_blank",
    aosDelay: "1000",
  },
  {
    id: 11,
    name: "PHP",
    icon: <SiPhp />,
    color: "#777BB3",
    textShadow: "0 0 20px rgba(119, 123, 179, 0.5)",
    link: "https://www.php.net/",
    target: "_blank",
    aosDelay: "1100",
  },
  {
    id: 12,
    name: "MySQL",
    icon: <SiMysql />,
    color: "#00758F",
    textShadow: "0 0 20px rgba(0, 117, 143, 0.5)",
    link: "https://www.mysql.com/",
    target: "_blank",
    aosDelay: "1200",
  },
  {
    id: 13,
    name: "Xampp",
    icon: <SiXampp />,
    color: "#FF6A00",
    textShadow: "0 0 20px rgba(255, 106, 0, 0.5)",
    link: "https://www.apachefriends.org/index.html",
    target: "_blank",
    aosDelay: "1300",
  },
  {
    id: 14,
    name: "VSCode",
    icon: <VscVscode />,
    color: "#007ACC",
    textShadow: "0 0 20px rgba(0, 122, 204, 0.5)",
    link: "https://code.visualstudio.com/",
    target: "_blank",
    aosDelay: "1400",
  },
  {
    id: 15,
    name: "Netlify",
    icon: <BiLogoNetlify />,
    color: "#00B24A",
    textShadow: "0 0 20px rgba(0, 178, 74, 0.5)",
    link: "https://www.netlify.com/",
    target: "_blank",
    aosDelay: "1500",
  },
  {
    id: 16,
    name: "Vitest",
    icon: <SiVitest />,
    color: "#4BCA82",
    textShadow: "0 0 20px rgba(0, 178, 74, 0.5)",
    link: "https://vitest.dev/",
    target: "_blank",
    aosDelay: "1600",
  },
];

const Skills = () => {
  return (
    <section
      className="min-h-[100vh] bg-bgColor lg:px-[8.5rem] py-[11.5rem] flex flex-col justify-center items-center lg:gap-[4rem] xs:gap-[2rem] xs:px-[5%] xs:py-[9rem] sm:px-[17%] md:px-[3%]"
      id="skills"
    >
      {/* Header  */}
      <div data-aos="zoom-out" className="">
        <h1 className="xs:text-4xl md:text-5xl font-semibold tracking-wide">
          Tech <span className="text-mainColor">Stack </span>
        </h1>
      </div>

      {/* Technologies List  */}
      <ul className="grid xs:grid-cols-4 lg:grid-cols-8 gap-4 ">
        {Technologies.map((item) => (
          <li
            data-aos="zoom-in-left"
            data-aos-delay={item.aosDelay}
            className="p-2 border-2 border-white/40 rounded-xl hover:border-white/90 transition duration-500"
            key={item.id}
          >
            <a
              className="xs:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={{ color: item.color }}
              href={item.link}
              target={item.target}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>

      {/* Tech List*/}
      <div className="grid xs:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 xs:gap-x-3 xs:ml-5 cursor-pointer ">
        {Technologies.map((item) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            className="flex items-center gap-1 group text-white/60 hover:text-white"
          >
            <div className=" bg-white/60 h-1 w-1 rounded-full group-hover:bg-white  duration-500"></div>

            {item.name}
          </div>
        ))}
      </div>

      {/* About Tech List */}
      <div data-aos="zoom-in">
        <p className=" xs:text-center  text-[1.02rem]  text-white/80 xs:px-5 md:px-[5%]">
          Building modern web applications requires a solid foundation of
          technologies. My tech stack integrates essential tools and frameworks,
          enabling me to create responsive, user-friendly, and dynamic web
          experiences. I effectively structure content using HTML and enhance
          styling with CSS, while Tailwind CSS allows for rapid and responsive
          design implementation. Interactivity is brought to life through
          JavaScript and React, empowering me to build engaging user interfaces.
          For version control, I rely on Git and GitHub, ensuring seamless
          collaboration and project management. Data management is streamlined
          with MySQL and JSON Server, facilitating efficient handling of backend
          data. I utilize PHP for server-side scripting, supported by XAMPP to
          create a local development environment. For coding, I prefer Visual
          Studio Code for its robust features and extensions. My projects are
          deployed effortlessly on Netlify, and I conduct testing with Vitest to
          ensure high-quality deliverables. This comprehensive skill set equips
          me to tackle diverse web development challenges with confidence.
        </p>
      </div>
    </section>
  );
};
export default Skills;
