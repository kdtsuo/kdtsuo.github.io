// ContactForm.jsx (Redesigned form component)
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const service = "service_qii0r9i";
  const template = "template_se1ntd8";
  const user = "xA2mLRICgKakxEiNJ";

  const validateForm = () => {
    if (!name || !email || !message) {
      return "Please fill in all fields.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsLoading(true);
    setIsDisabled(true);
    setSubmitClicked(true);

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
      });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl max-w-2xl mx-auto overflow-hidden">
      <div className="relative p-8 md:p-10">
        {/* Form header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-darkslateblue">
            Get In Touch
          </h2>
          <p className="text-darkslateblue/70 mt-2">
            Send us a message and we'll get back to you soon
          </p>
          <div className="h-1 w-16 bg-darkslateblue/40 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form inputs */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-darkslateblue">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isDisabled || isLoading}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-lightblue-300 
                        focus:border-lightblue-300 outline-none transition-all duration-200
                        ${
                          isDisabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white/80"
                        }`}
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-darkslateblue">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isDisabled || isLoading}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-lightblue-300 
                        focus:border-lightblue-300 outline-none transition-all duration-200
                        ${
                          isDisabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white/80"
                        }`}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-darkslateblue">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isDisabled || isLoading}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-lightblue-300 
                        focus:border-lightblue-300 outline-none transition-all duration-200 min-h-32
                        ${
                          isDisabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white/80"
                        }`}
              placeholder="Write your message here..."
              rows={5}
            />
          </div>

          <button
            type="submit"
            disabled={isDisabled || isLoading}
            onClick={() => setSubmitClicked(true)}
            className={`w-full bg-darkslateblue hover:bg-darkslateblue/90 text-white font-medium py-3 px-6 
                      rounded-lg transition-all duration-200 flex items-center justify-center
                      ${
                        isDisabled
                          ? "opacity-50 cursor-not-allowed"
                          : "shadow-lg hover:shadow-xl"
                      }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Status messages */}
        {submitClicked && (successMessage || errorMessage) && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              successMessage
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            } animate-fadeIn`}
          >
            <p
              className={`text-sm ${
                successMessage ? "text-green-600" : "text-red-600"
              }`}
            >
              {successMessage || errorMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
