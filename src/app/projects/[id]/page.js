import { notFound } from "next/navigation";
import ProjectImageModal from "./ProjectImageModal";

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
      
      {/* Renders the client-safe image wrapper component */}
      <ProjectImageModal 
        imageSrc={project.image}
        projectName={project.name}
        glbPath={project.glb}
        brochurePath={project.brochures}
      />

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
"use client";

import { notFound, useParams } from "next/navigation";
import { useState } from "react"; // Removed the unused useEffect import entirely

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

export default function ProjectDetails() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const resolvedId = params ? params.id : "";
  
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
      
      {/* CLICKABLE MAIN IMAGE */}
      {project.glb ? (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full focus:outline-none block text-left"
            type="button"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-96 object-cover rounded cursor-pointer transition-all border-2 border-transparent hover:border-blue-500 hover:brightness-95"
            />
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1.5 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              🔍 Click to open 3D view options
            </div>
          </button>
        </div>
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

      {/* POP-UP OVERLAY MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-lg relative shadow-2xl p-6 text-center border border-gray-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
              type="button"
            >
              ✕
            </button>

            {/* Header Title Text */}
            <div className="border-b pb-3 mb-4">
              <h3 className="font-bold text-xl text-gray-900">
                {project.name} Asset Manager
              </h3>
            </div>

            {/* Interactive Panel Card Content */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col items-center justify-center">
              <span className="text-4xl mb-3 block">🏢</span>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                3D Architecture Model Ready
              </h4>
              <p className="text-gray-500 text-xs max-w-sm mb-5 leading-relaxed">
                Click the action link below to launch or pull down the interactive spatial asset file for your local environment.
              </p>

              <a
                href={project.glb}
                download
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded shadow text-sm transition-colors block text-center"
              >
                Launch Model (.GLB)
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import { notFound, useParams } from "next/navigation";
import { useState } from "react";

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

export default function ProjectDetails() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const resolvedId = params ? params.id : "";
  
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
      {/* Clickable Image */}
      {project.glb ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full focus:outline-none block text-left"
          type="button"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-96 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity border-2 border-transparent hover:border-blue-500"
          />
        </button>
      ) : (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-96 object-cover rounded"
        />
      )}

      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <p className="mt-2">{project.location}</p>
      <p className="mt-4">{project.description}</p>

      <a
        href={project.brochures}
        download
        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
      >
        Download Brochure
      </a>

      {/* Pop-up Overlay Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative shadow-2xl p-6 text-center">
            {/* Safe Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white hover:bg-opacity-80 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
              type="button"
            >
              x
            </button>

            {/* Header Text */}
            <div className="bg-gray-100 p-4 border-b rounded-t-lg -mx-6 -mt-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800">
                3D Asset: {project.name}
              </h3>
            </div>

            {/* Container Box */}
            <div className="w-full h-[400px] bg-gray-50 flex flex-col items-center justify-center rounded border border-dashed border-gray-300 p-8">
              <div className="text-5xl mb-4">3D</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Open 3D Model
              </h4>
              <p className="text-gray-600 max-w-md mb-6 text-sm">
                Click the action button below to load your asset model file.
              </p>

              <a
                href={project.glb}
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow transition-colors"
              >
                Download .GLB File
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
"use client"; 

import { notFound, useParams } from 'next/navigation';
import { useState } from 'react';

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

  const resolvedId = params?.id;
  const project = projects.find(p => 
    p.id === parseInt(resolvedId) || 
    p.name.toLowerCase().replace(/\s+/g, '-') === resolvedId
  );
  
  if (!project) return notFound();

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
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative shadow-2xl p-6 text-center">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white hover:bg-opacity-80 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <div className="bg-gray-100 p-4 border-b rounded-t-lg -mx-6 -mt-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800">3D Asset Loader: {project.name}</h3>
            </div>

            {/* 100% Secure, Fail-Safe Local Option Box */}
            <div className="w-full h-[400px] bg-gray-50 flex flex-col items-center justify-center rounded border border-dashed border-gray-300 p-8">
              <div className="text-blue-600 text-5xl mb-4">📦</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Ready to Interact with {project.name}</h4>
              <p className="text-gray-600 max-w-md mb-6 text-sm">
                To guarantee compatibility and prevent external network blocks, download the source file directly below to interact inside your system viewer.
              </p>
              
              <a 
                href={project.glb} 
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow transition-colors inline-flex items-center gap-2"
              >
                <span>Open 3D Model File</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
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

  // Safely grabs your live website address only after the browser mounts
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

  // Combines your web domain and the asset file into a valid internet link
  const fullGlbUrl = origin ? origin + project.glb : '';
  
  // Connects to the engine by appending the model via a standard # hash parameter
  const viewerUrl = origin 
    ? `https://3dviewer.net{encodeURIComponent(fullGlbUrl)}`
    : '';

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
