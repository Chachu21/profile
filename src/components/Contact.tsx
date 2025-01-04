"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";

// Define the form data structure
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define the form errors structure
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.message) errors.message = "Message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setSubmitted(true);
        setError(null);
        console.log(formData);
        // Send a POST request to the API route
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting feedback:", error);
        setError("Failed to submit feedback. Please try again.");
      } finally {
        setSubmitted(false); // Allow the user to submit again
      }
    }
  };

  return (
    <section
      className="py-16 lg:section container mx-auto px-2 md:px-0"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text Section */}
          <motion.div
            variants={fadeIn("bottom", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex justify-start"
          >
            <div className="flex flex-col justify-center space-y-5">
              <h5 className="text-2xl md:text-[32px] font-bold">
                Get in Touch
              </h5>
              <p className="text-gray-200">
                I am here to help you in any way that I can. Please do not
                hesitate to contact me if you have any questions or concerns, or
                if you would like to work with me.
              </p>
              <ul className="flex flex-col space-y-3">
                <li className="flex space-x-3 text-lg items-center">
                  <IoLocationOutline size={28} className="text-green-500" />{" "}
                  <span>1000, Adiss Ababa, Ethiopia</span>
                </li>
                <li className="flex space-x-3 text-lg items-center">
                  <FaPhone size={28} className="text-blue-500" />{" "}
                  <span className=""> +251994868854</span>
                </li>
                <li className="flex space-x-3 text-lg items-center">
                  <AiTwotoneMail size={28} className="text-red-500" />{" "}
                  <span>tsegayechalachew0@gmail.com</span>
                </li>
              </ul>
            </div>
          </motion.div>
          {/* Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6
            pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-400 focus:border-accent transition-all"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Your name"
            />
            {formErrors.name && (
              <span className="text-red-500 text-sm">{formErrors.name}</span>
            )}

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-400 focus:border-accent transition-all"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Your email"
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm">{formErrors.email}</span>
            )}

            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-gray-400 focus:border-accent transition-all resize-none mb-12"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Your message"
            ></textarea>
            {formErrors.message && (
              <span className="text-red-500 text-sm">{formErrors.message}</span>
            )}

            <button
              type="submit"
              className="btn btn-lg disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? "Message Sent" : "Send message"}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
