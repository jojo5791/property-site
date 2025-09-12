import ProjectCard from '@/components/ProjectCard';

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
  { id: 2, name: 'Ocean View Condos', location: 'Penang', images: ['/images/project2.jpg'] },
  { id: 3, name: 'Hilltop Villas', location: 'Johor Bahru', images: ['/images/project3.jpg'] },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
