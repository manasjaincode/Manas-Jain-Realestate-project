import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    area: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ fullName: '', email: '', mobile: '', area: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Let's start the conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Get a Free Consultation</h3>
            <p className="text-gray-600 mb-8">Fill out the form and our team will get back to you within 24 hours</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                  Area / City
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="Los Angeles, CA"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Quick Quote <Send size={20} />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl">
              <Phone className="mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-100 mb-4">Mon-Fri from 8am to 5pm</p>
              <a href="tel:+15550000000" className="text-xl font-semibold hover:text-blue-200 transition">
                +1 (555) 000-0000
              </a>
            </div>

            <div className="bg-orange-500 text-white rounded-2xl p-8 shadow-xl">
              <Mail className="mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-orange-100 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:info@realestate.com" className="text-xl font-semibold hover:text-orange-200 transition">
                info@realestate.com
              </a>
            </div>

            <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-xl">
              <MapPin className="mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Come say hello at our office</p>
              <p className="text-lg">
                123 Real Estate Ave<br />
                Los Angeles, CA 90001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
