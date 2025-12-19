import { ArrowRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <button className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:text-blue-800 transition">
          READ MORE <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
