import { useEffect, useState } from 'react'; // state aur effect add kiya
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ClientCard from './ClientCard';
import { client, urlFor } from '../client'; // Sanity client import kiya

import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  const [clientsData, setClientsData] = useState([]); // Static array ki jagah state use kiya
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sanity se 'client' type ka data mangwao
    const query = '*[_type == "client"]';
    client.fetch(query).then((data) => {
      setClientsData(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center py-20">Loading Testimonials...</div>;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Happy Clients</h2> 
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
          </p>
        </div>

        {/* Slider tabhi dikhao jab data ho */}
        {clientsData.length > 0 ? (
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
         
          {clientsData.map((item) => (
  <SwiperSlide key={item._id}>
    <ClientCard 
      client={{
        ...item,
        // YAHAN FIX HAI: Pehle check karo image hai ya nahi
        image: item.image ? urlFor(item.image).url() : 'https://via.placeholder.com/150', 
        description: item.feedback 
      }} 
    />
  </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">No testimonials found.</p>
        )}
      </div>
    </section>
  );
}

export default Testimonials;