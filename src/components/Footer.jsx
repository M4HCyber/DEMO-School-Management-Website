import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold">Sunrise Academy</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering minds, shaping futures. Excellence in education since
              1985.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
              <Twitter className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
              <Instagram className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
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
              <Link
                to="#"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                Academic Calendar
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">
                  123 Education Street, Learning City, LC 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">
                  info@sunriseacademy.edu
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
                <span className="block">8:00 AM - 4:00 PM</span>
              </div>
              <div className="text-sm text-gray-400">
                <span className="block">Office Hours</span>
                <span className="block">7:30 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 Sunrise Academy. All rights reserved.
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
