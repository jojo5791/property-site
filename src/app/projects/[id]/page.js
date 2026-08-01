"use client";

import { notFound, useParams } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Safely registers the 3D viewer library on the client side to bypass webpack build traps
  useEffect(() => {
    if (typeof window !== "undefined" && !window.customElements.get("model-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://googleapis.com";
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

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

  // Alias name to safely mount custom 3D element tags
  const ModelViewerContainer = "model-viewer";

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
              🔍 Click to interact in 3D
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

      {/* INTERACTIVE POP-UP OVERLAY MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative shadow-2xl p-6 text-center border border-gray-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
              type="button"
            >
              x
            </button>

            {/* Header Title Text */}
            <div className="border-b pb-3 mb-4 text-left">
              <h3 className="font-bold text-xl text-gray-900">
                Interactive 3D View: {project.name}
              </h3>
            </div>

            {/* 3D Model Rendering Window */}
            <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
              {scriptLoaded ? (
                <ModelViewerContainer
                  src={project.glb}
                  alt={`3D design model of ${project.name}`}
                  auto-rotate=""
                  camera-controls=""
                  touch-action="pan-y"
                  style={{ width: "100%", height: "100%", outline: "none", display: "block" }}
                />
              ) : (
                <div className="text-gray-500 text-sm animate-pulse">
                  Loading 3D Engine Architecture...
                </div>
              )}
            </div>

            <div className="mt-4 text-xs text-gray-500 text-left">
              💡 Left-click and drag your mouse to rotate. Use your scroll wheel to zoom.
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
