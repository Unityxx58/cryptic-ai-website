import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h2 className="text-5xl font-extrabold max-w-4xl mb-6 drop-shadow-lg">
        The AI Layer Powering the Future Internet
      </h2>
      <p className="text-xl max-w-3xl mb-10 drop-shadow-md">
        Automate tasks, generate content, write code, create ads, and scale your business instantly with Cryptic AI.
      </p>
      <Link
        to="/pricing"
        className="bg-white text-green-600 font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        Get Started
      </Link>
    </section>
  );
}
