import { BiMapPin, BiMessage, BiPhoneCall } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900/95 bg-[url(/images/banner-2.jpg)] bg-cover bg-center text-white bg-blend-darken">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo white />
            </div>
            <p className="text-sm text-gray-400">
              Empowering minds, shaping futures. Excellence in education since
              1990.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
              <BsTwitter className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
              <BsInstagram className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                Student Portal
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <BiMapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">
                  Maiduguri Road, Adjacent to FUHSATH Azare, Bauchi State
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BiPhoneCall className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">+1 (234) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiMessage className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">
                  info@demoacademy.edu
                </span>
              </div>
            </div>
          </div>

          {/* School Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">School Hours</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">
                <span className="block">Monday - Friday</span>
                <span className="block">8:00 AM - 1:00 PM</span>
              </div>
              <div className="text-sm text-gray-400">
                <span className="block">Office Hours</span>
                <span className="block">7:30 AM - 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Demo Academy. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link
              to="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
