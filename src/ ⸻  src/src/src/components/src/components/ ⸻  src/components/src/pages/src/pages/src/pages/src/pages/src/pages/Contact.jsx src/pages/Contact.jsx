import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact Us</h2>
      {submitted ? (
        <p className="text-green-600 text-center text-xl font-semibold">
          Thanks for reaching out! We will get back to you soon.
        </p>
      ) : (
        <form className="max-w-md mx-auto flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
