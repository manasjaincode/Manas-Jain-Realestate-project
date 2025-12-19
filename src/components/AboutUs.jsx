function AboutUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <div className="absolute top-0 left-0 w-56 h-56 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-8 right-0 w-48 h-48 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=YOUR_WIDTH
"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 left-1/3 w-36 h-36 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8470803/pexels-photo-8470803.jpeg?auto=compress&cs=tinysrgb&w=800
"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-1/4 right-8 w-12 h-12 bg-blue-600 rounded-lg opacity-80"></div>
            <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-orange-500 rounded-lg opacity-80"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              About Us
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              With 15 years of experience in the real estate industry, we've helped hundreds of clients achieve their property dreams. Our team combines deep market knowledge, creative expertise, and a client-first approach to deliver exceptional results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Whether you're a first-time buyer, experienced investor, or seller looking for maximum value, we have the experience and dedication to help you succeed. Our commitment to excellence and personalized service sets us apart.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
