import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ark Resources Coaching" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <div className="relative group">
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
              >
                Services
              </Link>
            </div>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Button 
              asChild 
              className="bg-cobalt-600 hover:bg-cobalt-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-cobalt-600 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button 
                asChild 
                className="bg-cobalt-600 hover:bg-cobalt-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 w-fit"
              >
                <Link to="/contact" onClick={toggleMenu}>Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

