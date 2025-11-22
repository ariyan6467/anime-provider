import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-900 py-4 px-6 flex justify-between items-center z-10 shadow-lg">
      {/* Stylish Anime Logo */}
      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:scale-110 hover:text-white transition-all duration-300 ease-in-out">
        <Link href="/">
          AnimeLogo
        </Link>
      </div>

      {/* Navbar Links */}
      <ul className="flex space-x-6 text-lg font-semibold">
        <li><Link href="/home" className="text-white hover:text-yellow-400 transition-all duration-200">Home</Link></li>
        <li><Link href="/about" className="text-white hover:text-yellow-400 transition-all duration-200">About</Link></li>
        <li><Link href="/shop" className="text-white hover:text-yellow-400 transition-all duration-200">Shop</Link></li>
        <li><Link href="/contact" className="text-white hover:text-yellow-400 transition-all duration-200">Contact</Link></li>

        {/* Login/Register Links */}
        <li className="hidden sm:block"><Link href="/login" className="text-white hover:text-yellow-400 transition-all duration-200">Login</Link></li>
        <li className="hidden sm:block"><Link href="/register" className="text-white hover:text-yellow-400 transition-all duration-200">Register</Link></li>

        {/* Dropdown for Logged-in User */}
        <li className="relative hidden sm:block">
          <span className="text-white cursor-pointer">Logged User</span>
          <div className="absolute right-0 hidden bg-gray-700 text-white p-2 mt-2 rounded shadow-lg group-hover:block">
            <p className="px-4 py-2">Logged-in User</p>
            <Link href="/add-product" className="block px-4 py-2 hover:bg-gray-600">Add Product</Link>
            <Link href="/manage-products" className="block px-4 py-2 hover:bg-gray-600">Manage Products</Link>
          </div>
        </li>
      </ul>

      {/* Login Button */}
      <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg text-sm hover:bg-yellow-400 hidden sm:block transition-all duration-200">
        Login
      </button>

      {/* Responsive Mobile View */}
      <div className="sm:hidden">
        <button className="text-white" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Toggle Logic */}
      <div className="sm:hidden">
        <ul className="flex flex-col space-y-4 mt-4 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-900 p-6 absolute top-full left-0 right-0">
          <li><Link href="/home" className="text-white hover:text-yellow-400">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-yellow-400">About</Link></li>
          <li><Link href="/shop" className="text-white hover:text-yellow-400">Shop</Link></li>
          <li><Link href="/contact" className="text-white hover:text-yellow-400">Contact</Link></li>
          <li><Link href="/login" className="text-white hover:text-yellow-400">Login</Link></li>
          <li><Link href="/register" className="text-white hover:text-yellow-400">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
