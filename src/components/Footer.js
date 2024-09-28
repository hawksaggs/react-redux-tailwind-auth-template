// src/components/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-8">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About MyApp</h3>
          <p className="text-gray-400">
            MyApp is a platform that provides exceptional services to help you
            achieve your goals.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="hover:underline text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-gray-500 text-center py-4">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
