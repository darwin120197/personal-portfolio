import Profile2 from "../../assets/about/profile-2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const About = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isElementVisible, setIsElementVisible] = useState(false);
  const [seeLess, setSeeLess] = useState(false);

  const readMore = () => {
    setIsButtonVisible(false);
    setIsElementVisible(true);
    setSeeLess(true);
  };

  const seeLessToggle = () => {
    setIsButtonVisible(true);
    setIsElementVisible(false);
    setSeeLess(false);
  };

  return (
    <section
      className="min-h-[100vh] bg-secondBgColor lg:px-[6rem] xl:px-[8.5rem] py-[11.5rem] grid md:grid-cols-3 xs:px-[5%] xs:py-[9rem] xs:grid-cols-1 xs:gap-x-0 xs:gap-y-8 xs:justify-items-center md:px-[3%] md:place-items-center"
      id="about"
    >
      {/* Image Section */}
      <div
        data-aos="fade-right"
        className="border-4 border-mainColor rounded-2xl shadow-customOrange2 md:w-[25vw] md:h-[450px] xs:w-[60vw] xs:h-[40vh] sm:w-[40vw] md:mr-7"
      >
        <img className="h-full " src={Profile2} alt="Profile" />
      </div>

      {/* About Me Section */}
      <div
        data-aos="fade-left"
        className="flex flex-col justify-center gap-4 col-span-2 xs:items-center sm:items-start"
      >
        <div className="flex flex-col xs:items-center sm:items-start">
          <h1
            data-aos="fade-down"
            className="xs:text-4xl md:text-5xl font-semibold"
          >
            ABOUT <span className="text-mainColor">Me</span>
          </h1>
          <h3 className="text-[1.65rem] font-semibold">Frontend Developer</h3>
        </div>

        {/* Render the text with HTML including the <br /> */}
        <p className="opacity-60 text-[1.02rem] xs:text-center sm:text-start">
          fueled by curiosity, creativity, and a deep-rooted passion for
          crafting captivating digital experiences. My journey into the wolrd of
          web development was sparked by a desire to blend artistry with
          technology, and since then, I've embarked on a thrilling adventure of
          learning, growth, and innovation.
        </p>

        {isElementVisible && (
          <p className="opacity-60 text-[1.02rem] xs:text-center sm:text-start">
            Hello there! I'm Darwin Lopez a passionate individual with a diverse
            background journeying into the world of front-end web development.
            From serving customers at a fast-food chain to diving into the
            dynamic of sales as a multi-level marketing sales associate, my
            professional path has been colorful and enriching. It was during my
            time as an operational manager at a furniture shop that I discovered
            my love for coding, sparking a transformative career shift. Now, as
            an aspiring front-end web developer, I bring a unique blend of
            customer-centricity, sales acumen, and creative marketing insights
            to my work. I'm driven by a relentless desire to learn,grow, and
            craft captivating digital experiences. Join me on this exciting
            journey as we navigate the ever-evolving landscape of web
            development together.
          </p>
        )}

        {seeLess && (
          <button
            onClick={seeLessToggle}
            className="text-mainColor hover:text-shadow-customOrange2"
          >
            See Less
          </button>
        )}

        {/* Conditionally render the button */}
        {isButtonVisible && (
          <div>
            <button
              onClick={readMore}
              className="mt-2 group py-2 px-8 bg-mainColor text-bgColor font-bold rounded-lg shadow-customOrange tracking-wide hover:shadow-none duration-500 flex items-center gap-2"
            >
              Read More
              <FaArrowRightLong className="duration-500 group-hover:translate-x-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
