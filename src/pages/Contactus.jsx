import React, { useState } from "react";

const Contactus = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });

  const [volunteerForm, setVolunteerForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    standout: "",
    motivation: "",
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleVolunteerChange = (e) => {
    const { name, value } = e.target;
    setVolunteerForm({ ...volunteerForm, [name]: value });
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    let formData = formType === "contact" ? contactForm : volunteerForm;
    console.log("Form Data:", formData);

    // Reset form
    formType === "contact"
      ? setContactForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          reason: "",
          message: "",
        })
      : setVolunteerForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          standout: "",
          motivation: "",
        });
  };

  return (
    <div className="flex-col lg:flex lg:flex-row justify-center items-center p-6 pb-8 h-screen">
      <div className="border-2 shadow-md m-4 rounded-lg p-4 hover:shadow-xl hover:scale-[1.01] transition-all ease-in-out duration-500">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-400 to-teal-400 font-bold text-xl">
          Contact Us
        </h1>
        <form className="p-4" onSubmit={(e) => handleSubmit(e, "contact")}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="contact_firstName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First name
              </label>
              <input
                type="text"
                id="contact_firstName"
                name="firstName"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                value={contactForm.firstName}
                onChange={handleContactChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact_lastName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last name
              </label>
              <input
                type="text"
                id="contact_lastName"
                name="lastName"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Doe"
                value={contactForm.lastName}
                onChange={handleContactChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact_phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone number
            </label>
            <input
              type="tel"
              id="contact_phone"
              name="phone"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="9111XXXXXX"
              value={contactForm.phone}
              onChange={handleContactChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact_email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email address
            </label>
            <input
              type="email"
              id="contact_email"
              name="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              value={contactForm.email}
              onChange={handleContactChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact_reason"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Reason for Contacting in brief
            </label>
            <textarea
              id="contact_reason"
              name="reason"
              rows={3}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Write your answer"
              value={contactForm.reason}
              onChange={handleContactChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact_message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Message
            </label>
            <textarea
              id="contact_message"
              name="message"
              rows={5}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Write your message"
              value={contactForm.message}
              onChange={handleContactChange}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white text-center  flex justify-center mx-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="border-2 shadow-md m-4 rounded-lg p-4 hover:shadow-xl hover:scale-[1.01] transition-all ease-in-out duration-500">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-400 to-teal-400 font-bold text-xl">
          Become a Volunteer
        </h1>
        <form className="p-4" onSubmit={(e) => handleSubmit(e, "volunteer")}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="volunteer_firstName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First name
              </label>
              <input
                type="text"
                id="volunteer_firstName"
                name="firstName"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                value={volunteerForm.firstName}
                onChange={handleVolunteerChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="volunteer_lastName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last name
              </label>
              <input
                type="text"
                id="volunteer_lastName"
                name="lastName"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Doe"
                value={volunteerForm.lastName}
                onChange={handleVolunteerChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="volunteer_phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone number
            </label>
            <input
              type="tel"
              id="volunteer_phone"
              name="phone"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="9111XXXXXX"
              value={volunteerForm.phone}
              onChange={handleVolunteerChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="volunteer_email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email address
            </label>
            <input
              type="email"
              id="volunteer_email"
              name="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              value={volunteerForm.email}
              onChange={handleVolunteerChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="volunteer_standout"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Something about yourself that stands out
            </label>
            <textarea
              id="volunteer_standout"
              name="standout"
              rows={3}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Write your answer"
              value={volunteerForm.standout}
              onChange={handleVolunteerChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="volunteer_motivation"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              What motivates you to join PSS Foundation?
            </label>
            <textarea
              id="volunteer_motivation"
              name="motivation"
              rows={5}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Write your answer"
              value={volunteerForm.motivation}
              onChange={handleVolunteerChange}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white text-center  flex justify-center mx-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
