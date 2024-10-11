import Img1 from "../../assets/latestprojects/fb-logo.jpg";
import Img2 from "../../assets/latestprojects/website.jpg";
import Img3 from "../../assets/latestprojects/calculator.jpg";
import Img4 from "../../assets/latestprojects/to-do-list.jpg";

import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectList = [
  {
    id: 1,
    image: Img1,
    name: "Facebook Clone",
    description:
      "I built this project from scratch, which gives me a deep understanding of front-end development.",
    icon: <FaExternalLinkAlt />,
    link: "https://darwin120197.github.io/fb-clone/",
    target: "_blank",
  },
  {
    id: 2,
    image: Img2,
    name: "Trendz Furniture",
    description:
      "Diving deep into the world of web design with this project, I'm exploring the core concepts of Flexbox and CSS Grid to create responsive, dynamic layouts that adapt seamlessly to any screen.",
    icon: <FaExternalLinkAlt />,
    link: "https://darwin120197.github.io/trendzfurniture/",
    target: "_blank",
  },
  {
    id: 3,
    image: Img3,
    name: "Calculator",
    description:
      "Tool designed to perform basis arithmetic operations quickly and efficiently",
    icon: <FaExternalLinkAlt />,
    link: "https://darwin120197.github.io/calculator/",
    target: "_blank",
  },
  {
    id: 4,
    image: Img4,
    name: "To-Do List App",
    description:
      "Efficiently manage to task with a sleek to-do list app, ensuring productivity with intuitive features.",
    icon: <FaExternalLinkAlt />,
    link: "https://darwin120197.github.io/to-do-list-app",
    target: "_blank",
  },
];

const LatestProjects = () => {
  return (
    <section
      className="min-h-[100vh] px-[8.5rem] py-[11.5rem] bg-secondBgColor flex flex-col justify-center items-center gap-[4rem] xs:px-[5%] xs:py-[9rem]"
      id="projects"
    >
      {/* Header */}
      <div data-aos="fade-down">
        <h1 className="xs:text-4xl md:text-5xl font-semibold tracking-wide">
          Latest <span className="text-mainColor">Projects</span>
        </h1>
      </div>

      {/* Project List Section */}
      <ul
        data-aos="fade-up"
        className="grid lg:grid-cols-3 gap-7 w-full xs:grid-cols-1 sm:grid-cols-2"
      >
        {ProjectList.map((data) => (
          <li
            key={data.id}
            className="h-[200px] rounded-3xl overflow-hidden relative group"
          >
            <div className="h-64 w-full relative">
              <img
                className="h-full w-full object-cover transform hover:scale-110 duration-500"
                src={data.image}
                alt={data.name}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 w-full h-full bg-gradient-to-b from-transparent via-black/70 to-black/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 py-5 px-10 text-center">
              <h5 className="text-3xl font-semibold xs:text-2xl">
                {data.name}
              </h5>
              <p>{`${data.description.slice(0, 80)}...`}</p>
              <a
                className="text-mainColor text-3xl mt-2 hover:scale-110 duration-500"
                href={data.link}
                target={data.target}
              >
                {data.icon}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default LatestProjects;
