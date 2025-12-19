import { Star } from 'lucide-react';

function ClientCard({ client }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-6">
        <img
          src={client.image}
          alt={client.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-800">{client.name}</h3>
          <p className="text-orange-500 font-medium">{client.designation}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-600 italic leading-relaxed">"{client.description}"</p>
    </div>
  );
}

export default ClientCard;
