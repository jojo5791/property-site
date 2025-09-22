import ProjectCard from '@/components/ProjectCard';
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const projects = [
  { 
    id: 1, 
    name: 'Urbane Horizon', 
    location: 'Sitiawan', 
    images: [
      '/images/MainPage_House.jpg',
      '/images/house2.jpg',
      '/images/house3.jpg'
    ] 
  },
  { 
    id: 2, 
    name: 'Ocean View Condos', 
    location: 'Penang', 
    images: ['/images/project2.jpg'] 
  },
  { 
    id: 3, 
    name: 'Hilltop Villas', 
    location: 'Johor Bahru', 
    images: ['/images/project3.jpg'] 
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

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
