"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/Authprovider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const link = (
    <>
      <li>
        <Link
          href="/home"
          className="text-slate-200 hover:text-fuchsia-200 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/About"
          className="text-slate-200 hover:text-fuchsia-200 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          View Anime
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Stylish Anime Logo */}
        <div className="group flex items-center gap-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-900/40 transition duration-300 group-hover:scale-105">
            <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition duration-300 group-hover:opacity-50" />
            <span className="relative text-lg font-bold">AP</span>
          </div>
          <Link href="/" className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Anime Provider
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              Design refresh
            </span>
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <ul className="hidden items-center space-x-10 text-sm font-semibold uppercase tracking-[0.25em] sm:flex">
          {link}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:scale-105 hover:border-fuchsia-400/50 hover:bg-white/10"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0 1 12.006 21c-5.385 0-9.75-4.365-9.75-9.75 0-4.137 2.594-7.668 6.266-9.1a.75.75 0 0 1 .977.93A7.5 7.5 0 1 0 20.813 14a.75.75 0 0 1 .94 1.002Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25M18.364 5.636l-1.591 1.591M21 12h-2.25M18.364 18.364l-1.591-1.591M12 18.75V21M7.227 16.773 5.636 18.364M5.25 12H3m2.636-6.364 1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>

          {/* Desktop Login Button */}
          {user ? (
            <div
              className="relative"
           
            >
              <button
                className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-fuchsia-900/30 transition duration-900 hover:scale-105"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {user.displayName || "Logged-in User"}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 text-white shadow-2xl backdrop-blur">
                  <div className="border-b border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {user.email}
                  </div>
                  <div className="p-3 space-y-1 text-sm">
                    <Link
                    onClick={() => setIsDropdownOpen(false)}
                      href="/Add-Product"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Add Product
                    </Link>
                    <Link
                    onClick={() => setIsDropdownOpen(false)}
                      href="/Manage-products"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Manage Products
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                href="/Login"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-fuchsia-400/40 hover:bg-white/10"
              >
                Login
              </Link>
             
            </div>
          )}
        </div>

        {/* Mobile View - Hamburger Button */}
        <div className="sm:hidden">
          <button
            className="text-white"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-7 w-7"
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
      </div>

      {/* Mobile Menu - Conditional Rendering Based on Menu State */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-20 z-10 flex flex-col space-y-5 bg-slate-950/95 px-6 py-6 shadow-2xl backdrop-blur sm:hidden">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Navigate
            </p>
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-fuchsia-400/50 hover:bg-white/10"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
          <div className="flex flex-col space-y-4 text-lg font-semibold text-white">
            {link}
          </div>
          <div className="border-t border-white/10 pt-4 space-y-3">
            {user ? (
              <>
                <p className="text-sm text-slate-200">{user.email}</p>
                <Link
                  href="/Add-Product"
                  className="text-sm text-slate-200 transition hover:text-fuchsia-200"
                >
                  Add Produc
                </Link>
                <Link
                  href="/manage-products"
                  className="text-sm text-slate-200 transition hover:text-fuchsia-200"
                >
                  Manage Products
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:border-fuchsia-400/40 hover:bg-white/10"
                >
                  login
                </Link>
                <Link
                  href="/register"
                  className="flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-emerald-900/40 transition hover:scale-105"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
