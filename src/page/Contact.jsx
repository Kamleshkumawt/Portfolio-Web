import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Footer from "../components/Footer";


const Contact = () => {
  const ref = useRef();

  const [error, setError] = useState(false)
  const [succes, setSucces] = useState(false)

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cjgsrp1', 'template_hsfs40i', formRef.current, {
        publicKey: 'ujfkvrm3pOcrt6X2E',
      })
      .then(
        () => {
          setSucces(true)
          formRef.current.reset()
        },
        (err) => {
          setError(true)
          console.error("Error sending email: ", err);
        },
      );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900">
    <div
      ref={ref}
      className="Container max-w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch p-4 md:p-20 "
    >
      <div
        className="textContainer flex-1 flex flex-col gap-8 md:gap-10 p-4 md:p-16"
        
      >
        <h1 className="text-3xl md:text-7xl font-semibold text-center md:text-left " >
          Let's work together
        </h1>
        <div className="item" >
          <h2 className="font-semibold">Mail</h2>
          <span className="font-light break-all">kamleshkumwt12th@gmail.com</span>
        </div>
        <div className="item" >
          <h2 className="font-semibold">Address</h2>
          <span className="font-light">Udaipur, Rajasthan, India</span>
        </div>
        <div className="item" >
          <h2 className="font-semibold">Phone</h2>
          <span className="font-light">+91 637 796 1566</span>
        </div>
      </div>
      <div className="formContainer flex-1 relative flex justify-center items-center p-4 md:p-0">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-md flex flex-col items-start justify-center gap-4 md:gap-6 h-auto md:h-96"
        >
          <input
            className="p-3 w-full bg-transparent border border-white text-white rounded-xl"
            type="text"
            placeholder="Name"
            required
            name="name"
          />
          <input
            className="p-3 w-full bg-transparent border border-white text-white rounded-xl"
            type="email"
            placeholder="Email"
            required
            name="email"
          />
          <textarea
            placeholder="Message"
            className="p-5 w-full h-32 md:h-40 bg-transparent border border-white text-white rounded-xl"
            rows={6}
            required
            name="message"
          />
          <button
            type="submit"
            value="send"
            className="p-3 border-none bg-orange-400 w-full cursor-pointer font-semibold rounded-xl"
          >
            Submit
          </button>
          {error && <span className="text-red-400">Error</span>}
          {succes && <span className="text-green-400">Success</span>}
        </form>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;

