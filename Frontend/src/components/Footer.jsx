import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">RealEstate</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property. We provide consultation, design, and marketing services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Property Consultation</li>
              <li className="text-gray-400">Interior Design</li>
              <li className="text-gray-400">Real Estate Marketing</li>
              <li className="text-gray-400">Investment Advisory</li>
              <li className="text-gray-400">Property Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Real Estate Ave, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-blue-400" />
                <a href="tel:+15550000000" className="text-gray-400 hover:text-white transition">+1 (555) 000-0000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-blue-400" />
                <a href="mailto:info@realestate.com" className="text-gray-400 hover:text-white transition">info@realestate.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} RealEstate. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
