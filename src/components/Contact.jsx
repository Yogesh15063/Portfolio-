import React from 'react';

export const ContactForm = ({ id }) => {
  return (
    <div id={id} className="min-h-screen flex justify-center font-poppins items-center ">
      <div className="rounded-lg shadow-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border border-white bg-transparent text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-white bg-transparent text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border border-white bg-transparent text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
