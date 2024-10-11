import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="h-[85px] bg-secondBgColor px-[5rem] flex justify-between items-center xs:px-[3%]">
      <div>
        <p className="xs:text-sm">
          Copyright &copy; 2024 Darwin.CodeX | All Rights Reserved
        </p>
      </div>

      <a
        className="bg-mainColor p-3 rounded-lg shadow-customOrange hover:scale-105 duration-500 hover:text-bgColor"
        href="#home"
      >
        <FaArrowUp className="" />
      </a>
    </footer>
  );
};
export default Footer;
