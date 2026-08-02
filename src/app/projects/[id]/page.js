"use client";

import { notFound, useParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";

const projects = [
  { id: 1, name: "Urbane Horizon", location: "Sitiawan", image: "/images/MainPage_House.jpg", description: "Modern houses in the wood.", brochures: "/brochures/Google Map.pdf", glb: "/models/4669_3d_For_Website_2.glb" },
  { id: 2, name: "Ocean View Condos", location: "Penang", image: "/images/project2.jpg", description: "Luxury condos with sea view.", brochures: "/brochures/brochure2.pdf", glb: "/models/4669_3d_For_Website_2.glb" },
  { id: 3, name: "Hilltop Villas", location: "Johor Bahru", image: "/images/project3.jpg", description: "Exclusive villas on the hilltop.", brochures: "/brochures/brochure3.pdf", glb: "/models/4669_3d_For_Website_2.glb" }
];

// Loads and centers/scales the GLB model
function Model({ url }) {
  const { scene } = useGLTF(url);

  // Auto-scale/center so any model fits nicely in view
  const box = new (require("three").Box3)().setFromObject(scene);
  const size = box.getSize(new (require("three").Vector3)());
  const scale = 2.8 / (Math.max(size.x, size.y, size.z) || 1);

  return (
    <Center>
      <primitive object={scene} scale={scale} />
    </Center>
  );
}

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div className="text-gray-500 text-sm animate-pulse">Assembling Interactive Layout Mesh...</div>
    </div>
  );
}

export default function ProjectDetails() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const resolvedId = params ? params.id : "";
  const project = projects.find(
    p => p.id === parseInt(resolvedId, 10) || p.name.toLowerCase().replace(/\s+/g, "-") === resolvedId
  );

  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      <button onClick={() => setIsOpen(true)} className="w-full focus:outline-none block text-left" type="button">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-96 object-cover rounded cursor-pointer transition-all border-2 border-transparent hover:border-blue-500 hover:brightness-95"
        />
      </button>
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

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative shadow-2xl p-6 text-center border border-gray-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
              type="button"
            >
              x
            </button>
            <div className="border-b pb-3 mb-4 text-left">
              <h3 className="font-bold text-xl text-gray-900">Interactive 3D View: {project.name}</h3>
            </div>
            <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden relative select-none">
              <Suspense fallback={<Loader />}>
                <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
                  <ambientLight intensity={0.9} />
                  <directionalLight position={[5, 10, 7]} intensity={0.6} />
                  <Model url={project.glb} />
                  <OrbitControls autoRotate autoRotateSpeed={1} enablePan={false} />
                  <Environment preset="city" />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
