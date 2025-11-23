"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/Authprovider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  console.log("Navbar User:", user);

  const link = (
    <>
      <li>
        <Link
          href="/home"
          className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:underline"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/About"
          className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:underline"
        >
          View Anime
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:underline"
        >
          ADD ANIME
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:underline"
        >
          MANAGE ANIME
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 py-4 px-6 flex justify-between items-center z-10 shadow-lg">
      {/* Stylish Anime Logo */}
      <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 hover:scale-110 hover:text-white transition-all duration-300 ease-in-out">
        <Link href="/">AnimeLogo</Link>
      </div>

      {/* Desktop Navbar Links */}
      <ul className="hidden sm:flex space-x-8 text-xl font-bold tracking-wide">
        {link}
        {/* Dropdown for Logged-in User */}
        <li className="relative hidden sm:block">
          <div className="absolute right-0 hidden bg-gray-800 text-white p-2 mt-2 rounded-lg shadow-lg group-hover:block">
            <p className="px-4 py-2">Logged-in User</p>
            <Link
              href="/add-product"
              className="block px-4 py-2 hover:bg-gray-600"
            >
              Add Product
            </Link>
            <Link
              href="/manage-products"
              className="block px-4 py-2 hover:bg-gray-600"
            >
              Manage Products
            </Link>
          </div>
        </li>
      </ul>

      {/* Desktop Login Button */}
      {user ? (
        <div className="relative">
          {/* User Info Dropdown */}
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-purple-400 transition-all duration-300 ease-in-out">
            {user.displayName} {/* Assuming user object has a 'name' field */}
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <p className="px-4 py-2">{user.email}</p>{" "}
            {/* Display user's name */}
            <Link
              href="/add-product"
              className="block px-4 py-2 hover:bg-gray-600"
            >
              Add Product
            </Link>
            <Link
              href="/manage-products"
              className="block px-4 py-2 hover:bg-gray-600"
            >
              Manage Products
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-400 transition-all duration-300 ease-in-out">
            Login
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-400 transition-all duration-300 ease-in-out">
            Register
          </button>
        </div>
      )}

      {/* Mobile View - Hamburger Button */}
      <div className="sm:hidden">
        <button
          className="text-white"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Conditional Rendering Based on Menu State */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-gray-800 via-purple-700 to-indigo-800 p-6 flex flex-col space-y-4 mt-4">
          {link}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
