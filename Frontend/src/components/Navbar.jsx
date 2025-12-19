import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold text-blue-600  tracking-tighter">
              Real Estate by Manas Jain 
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 font-medium hover:text-blue-600 transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 font-medium hover:text-blue-600 transition">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 font-medium hover:text-blue-600 transition">Projects</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 font-medium hover:text-blue-600 transition">Testimonials</button>
            
            {/* Orange Contact Button Box */}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-[#FF7A30] text-white px-6 py-2 font-bold rounded-sm hover:bg-[#e66e2b] transition-all uppercase text-sm tracking-widest"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-3 text-gray-700 border-b border-gray-50">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-gray-700 border-b border-gray-50">Services</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-3 text-gray-700 border-b border-gray-50">Projects</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-3 text-gray-700 border-b border-gray-50">Testimonials</button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-center px-3 py-3 mt-4 bg-[#FF7A30] text-white font-bold rounded-sm uppercase"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;