import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../images/logo.png';
function Footer() {
  return (
    <footer className="bg-black opacity-90 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-20 w-auto" />
              
            </div>
            <p className="text-gray-300">
              Where young minds blossom with curiosity, confidence, and creativity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Pre Nursery</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Nursery</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">LKG</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">UKG</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91-94934 31854
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@deeveeninternational.com
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Venkateshwara Nagar, Near Imperial Garden Road, 'X' Roads, Jadcherla-509301</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Deeveen International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;