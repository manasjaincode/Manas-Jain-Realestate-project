import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ClientCard from './ClientCard';

// Swiper styles zaroori hain
import 'swiper/css';
import 'swiper/css/pagination';

const clientsData = [
  {
    id: 1,
    name: 'Manas Jain',
    designation: 'CEO, Tech Innovations',
    description: 'Working with this team was an absolute pleasure. They helped us find the perfect office space that matched our company culture and budget. Their attention to detail and professionalism is unmatched.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Manas Jain',
    designation: 'Real Estate Investor',
    description: 'I have worked with many real estate consultants, but this team stands out. Their market knowledge and strategic approach helped me make informed investment decisions that yielded excellent returns.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Manas Jain',
    designation: 'Interior Designer',
    description: 'The consultation and design services exceeded my expectations. They understood my vision perfectly and delivered a stunning property that my clients absolutely love. Highly recommended!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Manas Jain',
    designation: 'Business Owner',
    description: 'From the first consultation to the final handover, everything was seamless. Their marketing strategy helped sell my property faster than I expected. True professionals in every sense.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Manas Jain',
    designation: 'Marketing Director',
    description: 'Their innovative approach to real estate marketing is refreshing. They don\'t just sell properties; they create experiences. Our dream home became a reality thanks to their dedication.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    name: 'Manas Jain',
    designation: 'Architect',
    description: 'Exceptional service from start to finish. Their expertise in both design and market trends made the entire process smooth. I couldn\'t have asked for better partners in my real estate journey.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];


function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Happy Clients</h2> 
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
          </p>
        </div>

        {/* Swiper Slider Logic */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {clientsData.map((client) => (
            <SwiperSlide key={client.id}>
              <ClientCard client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;