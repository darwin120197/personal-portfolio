import Profile1 from "../../assets/-home/profile-1.png";
import CV from "../../assets/-home/Lopez, Darwin Morante. -CV1.pdf";
import { FaFacebook, FaLinkedin, FaInstagram, FaGoogle } from "react-icons/fa";

const SocialLinks = [
  {
    id: 1,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=100010646615730&mibextid=ZbWKwL",
    target: "_blank",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/darwinlopez120197/",
    target: "_blank",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/darwincodex/?hl=en",
    target: "_blank",
  },
  {
    id: 4,
    icon: <FaGoogle />,
    link: "mailto:darwinzky01@gmail.com",
    target: "_blank",
  },
];

const Home = () => {
  return (
    <section
      className="mt-[60px] bg-bgColor lg:px-[6rem] xl:px-[8.5rem] py-[10rem] min-h-[100vh] grid md:grid-cols-3 items-center xs:px-4 xs:grid-cols-1 xs:justify-items-center xs:gap-y[2rem] xs:gap-x-0 md:gap-x-6 lg:gap-x-8 overflow-hidden"
      id="home"
    >
      {/* Home Details */}
      <div
        data-aos="fade-down"
        className="col-span-2 flex flex-col gap-8 xs:order-2 md:order-1 xs:items-center sm:items-start"
      >
        {/* Details */}
        <div className="xs:flex xs:flex-col xs:items-center sm:items-start">
          <h3 className=" font-semibold xs:text-[1.5rem] sm:text-[2.2rem]  ">
            Welcome to my Portfolio. I'm
          </h3>
          <h1
            data-aos="fade-right"
            className="xs:text-5xl lg:text-6xl  font-semibold "
          >
            Darwin Lopez,
          </h1>
          <h3 className="sm:text-[2rem] font-semibold xs:text-center xs:text-2xl sm:mt-2">
            a <span className="text-mainColor">Front-End Web Developer</span>
          </h3>
          <p
            data-aos="fade-left"
            className="text-white/60 text-[1.02rem] xs:text-center sm:text-start sm:my-2"
          >
            a passionate front-end developer dedicated to creating immersive
            digital experiences through innovative code and design. With a keen
            eye for detail and a love for clean, efficient code, I strive to
            bring ideas to life on the web with elegance and functionality.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <ul className="flex gap-4 items-center">
            {SocialLinks.map((data) => (
              <li
                key={data.id}
                className="text-mainColor text-xl p-2 border-2 border-mainColor rounded-lg hover:text-bgColor hover:bg-mainColor hover:shadow-customOrange hover:translate-y-[-5px] duration-500"
              >
                <a className=" " href={data.link} target={data.target}>
                  {data.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*Download Button */}
        <li className="list-none hover:translate-x-3 duration-500 mt-2">
          <a
            href={CV}
            download
            className="py-3 px-8 bg-mainColor text-bgColor font-bold rounded-lg shadow-customOrange tracking-wide hover:translate-x-3 hover:shadow-none hover:text-textColor duration-500"
          >
            Download CV
          </a>
        </li>
      </div>

      {/* Image section */}
      <div className="border-2 border-mainColor rounded-full  overflow-hidden flex w-[350px] h-[350px] shadow-customOrange animate-floatImage bg-gradient-to-b from-bgColor to-mainColor xs:order-1 xs:w-[280px] xs:h-[280px]  md:order-2  xl:w-[25vw] xl:h-[25vw]">
        <img data-aos="zoom-in" className="" src={Profile1} alt="profile" />
      </div>
    </section>
  );
};
export default Home;
