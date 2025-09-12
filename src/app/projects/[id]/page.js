import { notFound } from 'next/navigation';

const projects = [
  { id: 1, name: 'Urbane Horizon', location: 'Sitiawan', image: '/images/MainPage_House.jpg', description: 'Modern houses in the wood.', brochure: '/brochures/Google Map.pdf' },
  { id: 2, name: 'Ocean View Condos', location: 'Penang', image: '/images/project2.jpg', description: 'Luxury condos with sea view.', brochure: '/brochures/brochure2.pdf' },
  { id: 3, name: 'Hilltop Villas', location: 'Johor Bahru', image: '/images/project3.jpg', description: 'Exclusive villas on the hilltop.', brochure: '/brochures/brochure3.pdf' },
];

export default function ProjectDetails({ params }) {
  const project = projects.find(p => p.id === parseInt(params.id));
  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img src={project.image} alt={project.name} className="w-full h-96 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <p className="mt-2">{project.location}</p>
      <p className="mt-4">{project.description}</p>
      <a href={project.brochure} download className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded">
        Download Brochure
      </a>
    </div>
  );
}
