import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Ark Resources Coaching" className="h-8 w-auto filter brightness-0 invert" />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming transitions into opportunities for growth. Professional coaching services for leadership development, sales excellence, and career advancement.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold">Alan J Liu, MBA, ACC</p>
              <p>Executive Coach & Leadership Development Specialist</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <a 
                  href="mailto:alan@createtheark.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  alan@createtheark.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <a 
                  href="tel:+6591551741" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +65.9155.1741
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <a 
                  href="tel:+14166058725" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +1.416.605.8725
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-semibold text-teal-400 mb-2">Leadership Coaching</h4>
              <p className="text-sm text-gray-400">Personalized leadership development and skill enhancement</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-400 mb-2">Sales Coaching</h4>
              <p className="text-sm text-gray-400">Performance-driven sales excellence and growth</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-400 mb-2">Leadership Training</h4>
              <p className="text-sm text-gray-400">Comprehensive leadership education and team building</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-400 mb-2">Professional Coaching</h4>
              <p className="text-sm text-gray-400">Career advancement and professional growth strategies</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ark Resources Coaching. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

