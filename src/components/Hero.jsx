import { Send } from 'lucide-react';
import { useState } from 'react';
import { client } from '../client'; // Client import check kar lena

function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    area: ''
  });

  const handleSubmit = async (e) => { // async banaya
    e.preventDefault();

    // Sanity Document mapping
    const doc = {
      _type: 'inquiry', // Jo schema mein name rakha tha
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.mobile, // Mapping mobile to phone
      city: formData.area,    // Mapping area to city
    };

    try {
      // Data Sanity mein bheja
      await client.create(doc);
      alert('Thank you! Your inquiry has been saved in Sanity. 🚀');
      setFormData({ fullName: '', email: '', mobile: '', area: '' });
    } catch (err) {
      console.error('Lafda ho gaya:', err);
      alert('Form submit nahi hua. Token check karo!');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="home" className="relative bg-black/50 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Consultation, Design & Marketing
          </h1>

        </div>

        <div className="bg-blue-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-400 border-opacity-30">
          <h3 className="text-2xl font-bold mb-6">Get a Free Consultation</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 border border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 border border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Mobile Number"
                className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 border border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                placeholder="Area / City"
                className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 border border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Quick Quote <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
