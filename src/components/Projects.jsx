import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    name: 'Modern Villa Complex',
    description: 'Luxurious villa complex featuring state-of-the-art amenities, spacious layouts, and premium finishes.',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Downtown Apartments',
    description: 'Contemporary apartments designed for urban living with modern kitchens and panoramic city views.',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Seaside Residences',
    description: 'Premium beachfront properties offering stunning ocean views and resort-style amenities.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Green Valley Homes',
    description: 'Eco-friendly residential community surrounded by lush greenery and sustainable design.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    name: 'Urban Heights Tower',
    description: 'Iconic high-rise tower with luxury penthouses and world-class amenities.',
    image: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const itemsToShow = 3;
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(projectsData[(currentIndex + i) % projectsData.length]);
    }
    return visible;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Section Title [cite: 11] */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B63E1] mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto italic">
            We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
          </p>
        </div>

        <div className="relative">
          {/* Responsive Grid [cite: 11, 17] */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {getVisibleProjects().map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={goToPrevious}
              className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={24} className="text-gray-400" />
            </button>

            <div className="flex gap-2">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#FF7A30] w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={24} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;