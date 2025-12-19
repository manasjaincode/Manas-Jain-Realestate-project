import { TrendingUp, Palette, Users } from 'lucide-react';

function WhyChooseUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Potential ROI',
      description: 'Our data-driven approach maximizes your investment returns. We analyze market trends and identify high-potential properties to ensure your success.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Transform spaces with our innovative design solutions. We create beautiful, functional environments that enhance property value and appeal.'
    },
    {
      icon: Users,
      title: 'Marketing',
      description: 'Strategic marketing that connects properties with the right buyers. Our campaigns maximize visibility and accelerate sales.'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute top-20 right-10 w-6 h-6 bg-blue-500 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="text-orange-500 font-semibold text-xl">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
