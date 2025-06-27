import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="font-extrabold text-2xl text-green-400 cursor-pointer">
        <Link to="/">Cryptic AI</Link>
      </h1>
      <ul className="flex space-x-8 font-semibold text-gray-300">
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <Link
              to={path}
              className={`hover:text-green-400 ${
                location.pathname === path ? "text-green-400" : ""
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
