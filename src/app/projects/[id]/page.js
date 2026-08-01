"use client";

import { notFound, useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    name: "Urbane Horizon",
    location: "Sitiawan",
    image: "/images/MainPage_House.jpg",
    description: "Modern houses in the wood.",
    brochures: "/brochures/Google Map.pdf",
    glb: "/models/4669_3d_For_Website_2.glb" // Your exact new filename applied here
  },
  {
    id: 2,
    name: "Ocean View Condos",
    location: "Penang",
    image: "/images/project2.jpg",
    description: "Luxury condos with sea view.",
    brochures: "/brochures/brochure2.pdf",
    glb: "/models/4669_3d_For_Website_2.glb" // Your exact new filename applied here
  },
  {
    id: 3,
    name: "Hilltop Villas",
    location: "Johor Bahru",
    image: "/images/project3.jpg",
    description: "Exclusive villas on the hilltop.",
    brochures: "/brochures/brochure3.pdf",
    glb: "/models/4669_3d_For_Website_2.glb" // Your exact new filename applied here
  }
];

export default function ProjectDetails() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [loadingError, setLoadingError] = useState("");
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  const resolvedId = params ? params.id : "";
  
  const project = projects.find((p) => {
    if (!resolvedId) return false;
    const matchId = p.id === parseInt(resolvedId, 10);
    const matchName = p.name.toLowerCase().replace(/\s+/g, "-") === resolvedId;
    return matchId || matchName;
  });

  useEffect(() => {
    if (!isOpen || !project?.glb) return;

    let isMounted = true;
    let scene, camera, renderer, model;

    const loadThreeJS = async () => {
      try {
        setLoadingError(""); 

        // 1. Safe Injection Loop for core library
        if (!window.THREE) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cloudflare.com";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // 2. Safe Injection Loop for asset loaders
        if (!window.THREE.GLTFLoader) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://jsdelivr.net";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        if (!isMounted || !containerRef.current) return;

        const width = containerRef.current.clientWidth || 600;
        const height = containerRef.current.clientHeight || 500;

        scene = new window.THREE.Scene();
        scene.background = new window.THREE.Color(0xf3f4f6);

        camera = new window.THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 2, 6);

        const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambientLight);
        const directionalLight = new window.THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);

        renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Try downloading the file using multiple common name variations
        const urlsToTry = [
          project.glb,
          project.glb.replace('.glb', '.GLB'),
          project.glb.toLowerCase()
        ];

        let successUrl = "";
        
        // Find which file URL actually exists on your Vercel deployment server
        for (const url of urlsToTry) {
          try {
            const res = await fetch(url, { method: 'HEAD' });
            if (res.ok) {
              successUrl = url;
              break;
            }
          } catch (e) { /** continue fallback loop **/ }
        }

        // Default path fallback if fetch head check gets skipped by browser rules
        const finalTargetUrl = successUrl || project.glb;

        const loader = new window.THREE.GLTFLoader();
        loader.load(
          finalTargetUrl,
          (gltf) => {
            if (!isMounted) return;
            model = gltf.scene;
            
            const box = new window.THREE.Box3().setFromObject(model);
            const size = box.getSize(new window.THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2.8 / (maxDim || 1);
            model.scale.set(scale, scale, scale);
            
            const center = box.getCenter(new window.THREE.Vector3());
            model.position.sub(center.multiplyScalar(scale));
            
            scene.add(model);
            
            const loadingText = containerRef.current.querySelector(".loading-indicator");
            if (loadingText) loadingText.style.display = "none";
          },
          undefined,
          (error) => {
            console.error("GLTF compilation error:", error);
            if (isMounted) setLoadingError("3D file format mismatch. Try reloading the window tab.");
          }
        );

        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const handleMouseDown = () => { isDragging = true; };
        const handleMouseMove = (e) => {
          const deltaMove = { x: e.offsetX - previousMousePosition.x, y: e.offsetY - previousMousePosition.y };
          if (isDragging && model) {
            model.rotation.y += deltaMove.x * 0.007;
            model.rotation.x += deltaMove.y * 0.007;
          }
          previousMousePosition = { x: e.offsetX, y: e.offsetY };
        };
        const handleMouseUp = () => { isDragging = false; };

        const domElement = renderer.domElement;
        domElement.addEventListener("mousedown", handleMouseDown);
        domElement.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        const animate = () => {
          if (!isMounted) return;
          requestAnimationFrame(animate);
          if (model && !isDragging) {
            model.rotation.y += 0.003; // Auto rotation fallback loop
          }
          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
        };
        animate();

        return () => {
          isMounted = false;
          domElement.removeEventListener("mousedown", handleMouseDown);
          domElement.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("mouseup", handleMouseUp);
        };

      } catch (err) {
        console.error("Engine failed:", err);
        if (isMounted) setLoadingError("Web browser graphics acceleration disabled.");
      }
    };

    loadThreeJS();

    return () => {
      isMounted = false;
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
      }
    };
  }, [isOpen, project]);

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
              🏢 Click to interact in 3D
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
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative shadow-2xl p-6 text-center border border-gray-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
              type="button"
            >
              x
            </button>

            <div className="border-b pb-3 mb-4 text-left">
              <h3 className="font-bold text-xl text-gray-900">
                Interactive 3D View: {project.name}
              </h3>
            </div>

            <div 
              ref={containerRef}
