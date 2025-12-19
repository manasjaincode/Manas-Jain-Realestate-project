import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NotYourAverageRealtor from './components/NotYourAverageRealtor';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
// import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <NotYourAverageRealtor />
      <WhyChooseUs />
      <AboutUs />
      <Projects />
      <Testimonials />
      {/* <ContactForm /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
