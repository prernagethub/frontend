import React from "react";

const Contact = () => {
  return (
    <div className=" flex flex-col items-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className=" text-lg mb-8">
          We'd love to hear from you. Whether you have a question about our
          products, shipping, or anything else — our team is ready to help.
        </p>
        <blockquote className="italic text-amber-700 mb-10">
          "Great service is always in fashion."
        </blockquote>

        <form className=" shadow-xl rounded-3xl p-8 space-y-6 text-left">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block mb-1  font-medium">
              Message
            </label>
            <textarea
              placeholder="Your message..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-600 px-6 py-2 rounded-full hover:bg-amber-700 transition shadow-md"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 ">
          <p>📍 123 ShopNest Lane, Jaipur, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@shopnest.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
