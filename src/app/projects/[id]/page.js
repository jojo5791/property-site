import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    name: "Urbane Horizon",
    location: "Sitiawan",
    image: "/images/MainPage_House.jpg",
    description: "Modern houses in the wood.",
    brochures: "/brochures/Google Map.pdf",
    glb: "/videos/4669_3d_For_Website_2.glb"
  },
  {
    id: 2,
    name: "Ocean View Condos",
    location: "Penang",
    image: "/images/project2.jpg",
    description: "Luxury condos with sea view.",
    brochures: "/brochures/brochure2.pdf",
    glb: "/videos/4669_3d_For_Website_2.glb"
  },
  {
    id: 3,
    name: "Hilltop Villas",
    location: "Johor Bahru",
    image: "/images/project3.jpg",
    description: "Exclusive villas on the hilltop.",
    brochures: "/brochures/brochure3.pdf",
    glb: "/videos/4669_3d_For_Website_2.glb"
  }
];

export default async function ProjectDetails({ params }) {
  const resolvedParams = await params;
  const resolvedId = resolvedParams ? resolvedParams.id : "";
  
  const project = projects.find((p) => {
    if (!resolvedId) return false;
    const matchId = p.id === parseInt(resolvedId, 10);
    const matchName = p.name.toLowerCase().replace(/\s+/g, "-") === resolvedId;
    return matchId || matchName;
  });

  if (!project) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      {/* Clicking the image opens the GLB file seamlessly in a fresh tab */}
      {project.glb ? (
        <a 
          href={project.glb} 
          target="_blank" 
          rel="noopener noreferrer"
          title="Click to view 3D Model"
          className="block w-full border-2 border-transparent hover:border-blue-500 rounded overflow-hidden transition-all duration-200"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-96 object-cover cursor-pointer hover:brightness-95 transition-all"
          />
        </a>
      ) : (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-96 object-cover rounded"
        />
      )}

      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <p className="mt-2 text-gray-600">{project.location}</p>
      <p className="mt-4">{project.description}</p>

      <div className="mt-6">
        <a
          href={project.brochures}
          download
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
        >
          Download Brochure
        </a>
      </div>
    </div>
  );
}
