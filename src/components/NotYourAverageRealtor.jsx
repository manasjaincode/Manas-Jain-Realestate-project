function NotYourAverageRealtor() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block w-4 h-4 bg-blue-500 rounded-full mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We go beyond traditional real estate services. Our team combines expert consultation, creative design, and strategic marketing to deliver exceptional results. Whether you're buying, selling, or investing, we're here to guide you through every step with personalized attention and industry expertise.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
              LEARN MORE →
            </button>
          </div>

          <div className="relative h-96">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full border-4 border-gray-200 overflow-hidden shadow-lg z-10">
              <img
                src="https://images.pexels.com/photos/7937708/pexels-photo-7937708.jpeg?auto=compress&cs=tinysrgb&w=800
"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-12 left-4 w-48 h-48 rounded-full border-4 border-gray-200 overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/8470792/pexels-photo-8470792.jpeg?auto=compress&cs=tinysrgb&w=800
"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-20 right-4 w-40 h-40 rounded-full border-4 border-gray-200 overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/7641860/pexels-photo-7641860.jpeg?auto=compress&cs=tinysrgb&w=800
"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-1/4 right-0 w-6 h-6 bg-orange-500 rounded-full opacity-70"></div>
            <div className="absolute -left-4 top-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotYourAverageRealtor;
