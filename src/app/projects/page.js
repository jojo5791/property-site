import ProjectCard from '@/components/ProjectCard';
import { Playfair_Display, Poppins } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const projects = [
  { 
    id: 1, 
    name: 'Urbane Horizon', 
    location: 'Sitiawan', 
    images: [
      '/images/house4.jpg',
      '/images/house2.jpg',
      '/images/house3.jpg'
    ],
    type: 'current'
  },
  { 
    id: 2, 
    name: 'Ocean View Condos', 
    location: 'Penang', 
    images: ['/images/project2.jpg'],
    type: 'future'
  },
  { 
    id: 3, 
    name: 'Hilltop Villas', 
    location: 'Johor Bahru', 
    images: ['/images/project3.jpg'],
    type: 'future'
  },
];

export default function ProjectsPage() {
  return (
    <div className={`min-h-screen bg-gray-50 ${poppins.className}`}>
      
      {/* Page Header */}
      <header className="text-center py-16">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold text-gray-900`}>
          Our Developments
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our latest property projects across Malaysia – designed to
          inspire modern living and elevate lifestyles.
        </p>
      </header>

      {/* Current Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-left">
          Current Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.filter((p) => p.type === 'current').map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={project.images[0]}
                alt={project.name}
                width={600}
                height={400}
                className="object-cover w-full h-72 transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-left">
          Future Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.filter((p) => p.type === 'future').map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
             {/* Ribbon */}
		<div className="absolute top-4 left-[-25px] bg-yellow-400 text-black font-semibold px-8 py-1 text-sm transform -rotate-45 shadow-md z-20 whitespace-nowrap">
		  Coming Soon
		</div>
              <Image
                src={project.images[0]}
                alt={project.name}
                width={600}
                height={400}
                className="object-cover w-full h-72 opacity-60 blur-[1px] group-hover:opacity-80 group-hover:blur-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
