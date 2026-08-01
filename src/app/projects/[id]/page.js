"use client"; 

import { notFound, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const projects = [
  { 
    id: 1, 
    name: 'Urbane Horizon', 
    location: 'Sitiawan', 
    image: '/images/MainPage_House.jpg', 
    description: 'Modern houses in the wood.', 
    brochures: '/brochures/Google Map.pdf',
    glb: '/videos/4669_3d_For_Website_2.glb' 
  },
  { 
    id: 2, 
    name: 'Ocean View Condos', 
    location: 'Penang', 
    image: '/images/project2.jpg', 
    description: 'Luxury condos with sea view.', 
    brochures: '/brochures/brochure2.pdf',
    glb: '/videos/4669_3d_For_Website_2.glb' 
  },
  { 
    id: 3, 
    name: 'Hilltop Villas', 
    location: 'Johor Bahru', 
    image: '/images/project3.jpg', 
    description: 'Exclusive villas on the hilltop.', 
    brochures: '/brochures/brochure3.pdf',
    glb: '/videos/4669_3d_For_Website_2.glb' 
  },
];

export default function ProjectDetails() {
  const params = useParams(); 
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState('');

  // Safely grabs your live website address only after the browser loads up
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const resolvedId = params?.id;
  const project = projects.find(p => 
    p.id === parseInt(resolvedId) || 
    p.name.toLowerCase().replace(/\s+/g, '-') === resolvedId
  );
  
  if (!project) return notFound();

  // Correctly formats the link text by combining your web domain and the video path
  const fullGlbUrl = `${origin}${project.glb}`;
  const viewerUrl = `https://3dviewer.net{encodeURIComponent(fullGlbUrl)}`;

  return (
    <div className="max-w-4xl mx-auto p-8 relative">

      {/* CLICKABLE LARGE IMAGE */}
      {project.glb ? (
        <button 
          onClick={() => setIsOpen(true)} 
          className="w-full focus:outline-none block text-left" 
          title="Click to view 3D Model"
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-96 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity border-2 border-transparent hover:border-blue-500" 
          />
        </button>
      ) : (
        <img src={project.image} alt={project.name} className="w-full h-96 object-cover rounded" />
      )}

      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <p className="mt-2">{project.location}</p>
      <p className="mt-4">{project.description}</p>
      
      <a href={project.brochures} download className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded">
        Download Brochure
      </a>

      {/* POP-UP OVERLAY MODAL */}
      {isOpen && origin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white hover:bg-opacity-80 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <div className="bg-gray-100 p-4 border-b">
              <h3 className="font-bold text-lg text-gray-800">3D Interactive Model: {project.name}</h3>
            </div>

            {/* Interactive window frame */}
            <div className="w-full h-[500px] bg-gray-50">
              <iframe
                src={viewerUrl}
                title="3D Interactive Viewer"
                className="w-full h-full border-none"
                allow="xr-spatial-tracking"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
