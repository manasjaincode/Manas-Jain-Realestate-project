import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react'; // useEffect add kiya
import ProjectCard from './ProjectCard';
import { client, urlFor } from '../client'; // Sanity client import karo

function Projects() {
  const [projectsData, setProjectsData] = useState([]); // State for dynamic data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // --- Sanity se data fetch karne ka logic ---
  useEffect(() => {
    const query = '*[_type == "project"]';
    client.fetch(query).then((data) => {
      setProjectsData(data);
      setLoading(false);
    });
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    if (projectsData.length === 0) return [];
    const itemsToShow = Math.min(3, projectsData.length); // Agar 3 se kam projects hain toh crash nahi hoga
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(projectsData[(currentIndex + i) % projectsData.length]);
    }
    return visible;
  };

  if (loading) return <div className="text-center py-20">Loading Projects...</div>;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B63E1] mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto italic">
            We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {getVisibleProjects().map((project) => (
              <ProjectCard 
                key={project._id} 
                project={{
                  ...project,
                  // Assignment Bonus: $450 x 350 crop applying here
image: urlFor(project.image).width(450).height(350).fit('crop').auto('format').url(),
                  name: project.title // Mapping 'title' from Sanity to 'name' for your component
                }} 
              />
            ))}
          </div>

          {/* Controls - Sirf tab dikhao jab 1 se zyada project ho */}
          {projectsData.length > 1 && (
            <div className="flex justify-center items-center gap-6 mt-12">
              <button onClick={goToPrevious} className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
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

              <button onClick={goToNext} className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                <ChevronRight size={24} className="text-gray-400" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;