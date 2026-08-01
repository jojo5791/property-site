"use client"; 

import { notFound, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Script from 'next/script';

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
  const [isMounted, setIsMounted] = useState(false);

  // Solves hydration lag on custom elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const resolvedId = params?.id;
  const project = projects.find(p => 
    p.id === parseInt(resolvedId) || 
    p.name.toLowerCase().replace(/\s+/g, '-') === resolvedId
  );
  
  if (!project) return notFound();

  // Create a safe custom component wrapper to trick the compiler type-checker
  const ModelViewerTag = 'model-viewer';

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      <Script type="module" src="https://googleapis.com" strategy="afterInteractive" />

      {/* CLICKABLE LARGE IMAGE */}
      {project.glb ? (
        <button onClick={() => setIsOpen(true)} className="w-full focus:outline-none block text-left" title="Click to view 3D Model">
          <img src={project.image} alt={project.name} className="w-full h-96 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity border-2 border-transparent hover:border-blue-500" />
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
      {isOpen && isMounted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative shadow-2xl">
            
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white hover:bg-opacity-80 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              ✕
            </button>

            <div className="bg-gray-100 p-4 border-b">
              <h3 className="font-bold text-lg text-gray-800">3D Interactive Model: {project.name}</h3>
            </div>

            <div className="w-full h-[500px] bg-gray-50 flex items-center justify-center">
              {/* Dynamic tag string stops Next.js build errors instantly */}
              <ModelViewerTag
                src={project.glb}
                alt={`3D model`}
                auto-rotate=""
                camera-controls=""
                touch-action="pan-y"
                style={{ width: '100%', height: '100%', display: 'block', outline: 'none' }}
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
"use client"; // Required at the very top for interactivity and pop-up state

import { notFound, useParams } from 'next/navigation';
import { useState } from 'react';
import Script from 'next/script';

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
  const params = useParams(); // Client-safe params hook
  const [isOpen, setIsOpen] = useState(false); // Pop-up visibility state

  const resolvedId = params?.id;
  const project = projects.find(p => 
    p.id === parseInt(resolvedId) || 
    p.name.toLowerCase().replace(/\s+/g, '-') === resolvedId
  );
  
  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      {/* Google Model-Viewer Scripts loaded safely */}
      <Script type="module" src="https://googleapis.com" />

      {/* CLICKABLE LARGE IMAGE: Opens the modal overlay instead of downloading */}
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
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 animate-fadeIn">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white hover:bg-opacity-80 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all text-xl"
            >
              ✕
            </button>

            {/* Title bar inside modal */}
            <div className="bg-gray-100 p-4 border-b">
              <h3 className="font-bold text-lg text-gray-800">3D Interactive Model: {project.name}</h3>
            </div>

            {/* Interactive 3D Model Box */}
            <div className="w-full h-[500px] bg-gray-50 flex items-center justify-center">
              <model-viewer
                src={project.glb}
                alt={`A 3D model of ${project.name}`}
                auto-rotate
                camera-controls
                touch-action="pan-y"
                style={{ width: '100%', height: '100%', outline: 'none' }}
              >
              </model-viewer>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
export const dynamic = 'force-dynamic'; 

import { notFound } from 'next/navigation';

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
    glb: '/videos/4669_3d_For_Website_2s.glb' 
  },
];

export default async function ProjectDetails({ params }) {
  const resolvedParams = await params;
  
  // This matching logic checks both the ID number AND the URL name string (e.g. "urbane-horizon")
  const project = projects.find(p => 
    p.id === parseInt(resolvedParams.id) || 
    p.name.toLowerCase().replace(/\s+/g, '-') === resolvedParams.id
  );
  
  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
      
      {/* CLICKABLE LARGE IMAGE: Downloads the .glb file on click */}
      {project.glb ? (
        <a href={project.glb} download title="Click to download 3D Model">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-96 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity border-2 border-transparent hover:border-blue-500" 
          />
        </a>
      ) : (
        <img src={project.image} alt={project.name} className="w-full h-96 object-cover rounded" />
      )}

      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <p className="mt-2">{project.location}</p>
      <p className="mt-4">{project.description}</p>
      
      <a href={project.brochures} download className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded">
        Download Brochure
      </a>
    </div>
  );
}
