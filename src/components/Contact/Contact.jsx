import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const userName = useRef();
  const emailAdd = useRef();
  const contactNum = useRef();
  const subjectEmail = useRef();
  const message = useRef();

  const handleEmail = (email) => {
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.current.value === "") {
      return false;
    } else if (!emailRegEx.test(email.current.value)) {
      return false;
    } else {
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isEmailValid = handleEmail(emailAdd);

    setTimeout(() => {
      if (!isEmailValid) {
        toast.error("Please enter a valid email address");
      }
    }, 1000);

    if (
      userName.current.value !== "" &&
      emailAdd.current.value !== "" &&
      contactNum.current.value !== "" &&
      subjectEmail.current.value !== "" &&
      message.current.value !== ""
    ) {
      emailjs
        .sendForm("service_qbp3cke", "template_ef01t2v", form.current, {
          publicKey: "x7C4jg03L3GZ5J7o4",
        })
        .then(
          () => {
            toast.success("Message sent successfully!");

            setTimeout(() => {
              userName.current.value = "";
              emailAdd.current.value = "";
              contactNum.current.value = "";
              subjectEmail.current.value = "";
              message.current.value = "";
            }, 5000);
          },
          (error) => {
            toast.error("Failed to send the message.");
          }
        );
    } else {
      //If at least one field is empty, show a warning
      toast.warn("Please fill in all the field before sending the message");
    }
  };

  return (
    <section
      className=" min-h-[100vh] lg:px-[25.5rem] lg:py-[8.5rem]  bg-bgColor flex flex-col justify-center items-center gap-[3rem] xs:px-[5%] xs:py-[9rem]"
      id="contact"
    >
      {/* Header */}
      <div data-aos="fade-down" className="">
        <h1 className="xs:text-4xl md:text-5xl font-semibold tracking-wide">
          Contact <span className="text-mainColor">Me</span>
        </h1>
      </div>

      {/* Contact Section */}
      <form
        data-aos="fade-up"
        onSubmit={sendEmail}
        ref={form}
        className="w-[45vw] xs:w-full flex flex-col items-center "
        action="#"
      >
        {/* Input List */}
        <div className="grid sm:grid-cols-2 gap-4 w-full xs:grid-cols-1">
          <div data-aos="fade-right" className="">
            <label htmlFor="name"></label>
            <input
              className="bg-secondBgColor outline-none py-4 px-6 rounded-lg w-full"
              type="text"
              id="name"
              name="user_name"
              autoComplete="off"
              placeholder="Full Name"
              ref={userName}
            />
          </div>
          <div data-aos="fade-left" className="">
            <label htmlFor="email"></label>
            <input
              className="bg-secondBgColor outline-none py-4 px-6 rounded-lg w-full"
              type="email"
              id="email"
              name="user_email"
              autoComplete="off"
              placeholder="Email Address"
              ref={emailAdd}
            />
          </div>
          <div data-aos="fade-right" className="">
            <label htmlFor="contact-number"></label>
            <input
              className="bg-secondBgColor outline-none py-4 px-6 rounded-lg w-full"
              type="number"
              id="contact-number"
              name="contact_number"
              autoComplete="off"
              placeholder="Contact No."
              ref={contactNum}
            />
          </div>
          <div data-aos="fade-left" className="">
            <label htmlFor="subject"></label>
            <input
              className="bg-secondBgColor outline-none py-4 px-6 rounded-lg w-full"
              type="text"
              id="subject"
              name="email_subject"
              autoComplete="off"
              placeholder="Email Subject"
              ref={subjectEmail}
            />
          </div>
        </div>

        {/* Text Area */}
        <div data-aos-delay="500" className="flex flex-col gap-2 mt-3 w-full">
          <label htmlFor="message"></label>
          <textarea
            className=" bg-secondBgColor  rounded-lg w-full py-4 px-6 outline-none resize-none"
            name="message"
            cols={30}
            rows={10}
            id="message"
            placeholder="Your message"
            ref={message}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-mainColor text-black p-3 rounded-lg shadow-customOrange hover:translate-y-[-.3rem] hover:text-white hover:shadow-none duration-500 inline-block xs:w-full md:w-[35vw] lg:w-[15vw] tracking-wider"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
export default Contact;
