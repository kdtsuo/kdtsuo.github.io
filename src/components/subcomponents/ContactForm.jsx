import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state variable for error messages
  const [isDisabled, setIsDisabled] = useState(false); // New state variable
  const service = "service_qii0r9i";
  const template = "template_se1ntd8";
  const user = "xA2mLRICgKakxEiNJ";

  const validateForm = () => {
    if (!name || !email || !message) {
      return "Please fill in all fields.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation pattern
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }
    return null; // Return null if all validations pass
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setSuccessMessage("");
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return; // Stop form submission if there are validation errors
    }

    // Disable all fields and indicate loading state
    setIsLoading(true);
    setIsDisabled(true); // Disable fields upon submission

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(service, template, templateParams, user)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message has been sent! Thank you!");
        },
        (err) => {
          console.log("FAILED...", err);
          setErrorMessage("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsLoading(false);
        // Keep isDisabled as true to prevent further input
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="forms bg-white w-full lg:w-2/3 h-auto m-auto p-10 drop-shadow-2xl"
      noValidate
    >
      <h1 className="title text-2xl lg:text-3xl text-darkslateblue text-center mb-5 ">
        Direct Contact via Email
      </h1>
      <div className="space-y-3 flex flex-col justify-center">
        <h1 className="text-2xl 0">Name</h1>
        <input
          className={`inner-forms drop-shadow-box ${
            isDisabled ? "bg-gray-500 cursor-not-allowed opacity-50" : ""
          }`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isDisabled || isLoading} // Disable input based on state
        />
        <h1 className="text-2xl ">Email</h1>
        <input
          className={`inner-forms drop-shadow-box ${
            isDisabled ? "bg-gray-500 cursor-not-allowed opacity-50" : ""
          }`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled || isLoading} // Disable input based on state
        />
        <h1 className="text-2xl ">Message</h1>
        <textarea
          className={`inner-forms drop-shadow-box ${
            isDisabled ? "bg-gray-500 cursor-not-allowed opacity-50" : ""
          }`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isDisabled || isLoading} // Disable textarea based on state
        />
        <button
          className={`btn-lt drop-shadow-box  ${
            isDisabled ? " cursor-not-allowed opacity-50" : ""
          }`}
          type="submit"
          disabled={isDisabled || isLoading}
          onClick={() => setSubmitClicked(true)}
        >
          Submit
        </button>

        <div
          className={`bg-white drop-shadow-box flex m-auto p-3 rounded-lg ${
            submitClicked ? "block" : "hidden"
          }`}
        >
          <h1
            className={`${
              isLoading ? "block animate-fadein" : "animate-fadeout hidden"
            } text-center text-xl text-yellow-500`}
          >
            Sending...
          </h1>
          <h1
            className={`${
              successMessage ? "block animate-fadein" : "animate-fadeout hidden"
            } text-center text-xl text-green-500`}
          >
            {successMessage}
          </h1>
          <h1
            className={`${
              errorMessage ? "block animate-fadein" : "animate-fadeout hidden"
            } text-center text-xl text-red-500`}
          >
            {errorMessage}
          </h1>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
