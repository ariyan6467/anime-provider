// components/Footer.js

import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">ProductHub</h2>
          <p>Your trusted marketplace for quality products.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul>
            <li><Link href="/documentation">Documentation</Link></li>
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/settings/copilot/coding_agent" target="_blank" rel="noopener noreferrer">
             <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">              <FaSquareXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/nahian-jawad-ariyan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        <p>&copy; 2025 ProductHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
