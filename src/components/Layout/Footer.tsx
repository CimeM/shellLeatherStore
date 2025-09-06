import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="font-serif text-xl font-bold">Shell Leather</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Handcrafted leather goods inspired by the timeless beauty of Provence. 
              Each piece is made with love, dedication, and traditional techniques 
              passed down through generations.
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in the South of France</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/products" 
                className="block text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                Our Products
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/provence" 
                className="block text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                Provence Inspiration
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Provence-Alpes-Côte d'Azur, France
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
                  href="mailto:hello@shell.rivieraapps.com" 
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm"
                >
                  hello@shell.rivieraapps.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +33 (0)4 XX XX XX XX
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Shell Leather. Handcrafted with passion in Provence.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;