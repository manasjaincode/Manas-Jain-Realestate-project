import { Mail } from 'lucide-react';
import { useState } from 'react';
import { client } from '../client'; // Sanity client import karna mat bhulna

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Sanity mein newsletter document create karna
      await client.create({
        _type: 'newsletter',
        email: email,
        subscribedAt: new Date().toISOString(),
      });

      alert('Shabaash! Thank you for subscribing! ✅');
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      alert('Kuch gadbad ho gayi. Check terminal!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
            <Mail className="text-blue-600" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get the latest property listings, market insights, and exclusive offers delivered straight to your inbox
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
              } text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap`}
            >
              {isSubmitting ? 'Processing...' : 'Subscribe'}
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;