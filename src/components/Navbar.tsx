import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import Logo from '../images/logo.png';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/parents', label: 'Parents' },
    { path: '/students', label: 'Students' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-[#2c3e50] shadow-lg fixed w-full z-50 top-0" 
       style={{
       backdropFilter: 'blur(20px)', 
       WebkitBackdropFilter: 'blur(20px)', 
       height: 'auto', 
       maxHeight: '80px',
       backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,50 Q50,30 70,50 T90,50' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='2'/%3E%3Ccircle cx='20' cy='20' r='3' fill='rgba(255,255,255,0.05)'/%3E%3Ccircle cx='80' cy='80' r='3' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
       backgroundSize: '150px',
       }}>
      <div className="container-wide px-4">
      <div className="flex justify-between items-center h-auto py-2">
      <div className="flex items-center relative">
      <Link to="/" className="flex items-center group">
      <div className="relative overflow-hidden rounded-xl bg-white/80 
       hover:bg-white/20 transition-all duration-300 
       transform hover:scale-105 hover:shadow-lg">
      <img src={Logo} 
       alt="Logo" 
       className="w-[135px] h-full md:h-[60px] lg:h-[60px] p-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 
       group-hover:opacity-75 transition-opacity duration-300"></div>
      </div>
      </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
      {navItems.map((item) => (
      <Link 
      key={item.path}
      to={item.path} 
      className="relative text-white text-base lg:text-lg hover:text-[#e74c3c] transition-colors duration-300 
       after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 
       after:-bottom-1 after:bg-[#e74c3c] after:transition-all after:duration-300 
       hover:after:w-full whitespace-nowrap"
      >
      {item.label}
      </Link>
      ))}
      <Link to="/admissions" 
      className="px-4 py-2 text-base lg:text-lg bg-[#e74c3c] text-white rounded-full hover:bg-white/20 
       transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap">
      Schedule Visit
      </Link>
      </div>

      <div className="md:hidden flex items-center">
      <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)} 
      className="text-white hover:text-[#e74c3c] transition-all duration-300 p-2"
      aria-label="Toggle menu"
      >
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      </div>
      </div>

      {isMenuOpen && (
      <div className="md:hidden bg-[#2c3e50]/95 backdrop-blur-sm animate-fadeIn">
      <div className="px-4 py-3 space-y-2 max-h-[80vh] overflow-y-auto">
      {navItems.map((item, index) => (
      <Link
      key={item.path}
      to={item.path}
      className="block px-3 py-2 text-white text-base hover:text-[#e74c3c] hover:bg-white/10 
       rounded-md transition-all duration-300 transform hover:translate-x-2"
      onClick={() => setIsMenuOpen(false)}
      style={{ animationDelay: `${index * 50}ms` }}
      >
      {item.label}
      </Link>
      ))}
      <Link to="/admissions"
      className="block w-full px-4 py-2 text-base text-center bg-[#e74c3c] text-white rounded-full 
       hover:bg-white/20 transition-all duration-300 hover:shadow-lg 
       transform hover:-translate-y-0.5 mt-4"
      onClick={() => setIsMenuOpen(false)}
      >
      Schedule Visit
      </Link>
      </div>
      </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;