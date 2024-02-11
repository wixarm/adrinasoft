import { useState } from "react";
import { motion } from "framer-motion";
import str from "../translations/localization";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";

  return (
    <div
      dir={preferredLanguage === "fa" ? "rtl" : "ltr"}
      className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {str.contact.title}
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="grid grid-cols-1 gap-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1 }}
                className="rounded-md"
              >
                <label htmlFor="name" className="sr-only">
                  {str.contact.input1}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={str.contact.input1}
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1 }}
                className="rounded-md"
              >
                <label htmlFor="email" className="sr-only">
                  {str.contact.input2}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={str.contact.input2}
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1 }}
                className="rounded-md"
              >
                <label htmlFor="message" className="sr-only">
                  {str.contact.input3}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={str.contact.input3}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </motion.div>
            </div>

            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1 }}
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {str.contact.send}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
