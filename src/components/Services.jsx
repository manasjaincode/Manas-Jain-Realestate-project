import { Building2, Palette, TrendingUp, Shield, Home, Users } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: Building2,
    title: 'Property Consultation',
    description: 'Expert guidance to help you find the perfect property that matches your needs and budget.'
  },
  {
    id: 2,
    icon: Palette,
    title: 'Interior Design',
    description: 'Transform your space with our innovative design solutions and personalized styling.'
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Real Estate Marketing',
    description: 'Comprehensive marketing strategies to showcase your property to the right audience.'
  },
  {
    id: 4,
    icon: Shield,
    title: 'Investment Advisory',
    description: 'Make informed decisions with our market analysis and investment recommendations.'
  },
  {
    id: 5,
    icon: Home,
    title: 'Property Management',
    description: 'Full-service property management to maximize your investment returns.'
  },
  {
    id: 6,
    icon: Users,
    title: 'Client Relations',
    description: 'Dedicated support team ensuring a smooth experience from start to finish.'
  }
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
