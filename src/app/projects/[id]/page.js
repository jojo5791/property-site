"use client";

import { notFound, useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const projects = [
  { id: 1, name: "Urbane Horizon", location: "Sitiawan", image: "/images/MainPage_House.jpg", description: "Modern houses in the wood.", brochures: "/brochures/Google Map.pdf", glb: "/models/4669_3d_For_Website_2.glb" },
  { id: 2, name: "Ocean View Condos", location: "Penang", image: "/images/project2.jpg", description: "Luxury condos with sea view.", brochures: "/brochures/brochure2.pdf", glb: "/models/4669_3d_For_Website_2.glb" },
  { id: 3, name: "Hilltop Villas", location: "Johor Bahru", image: "/images/project3.jpg", description: "Exclusive villas on the hilltop.", brochures: "/brochures/brochure3.pdf", glb: "/models/4669_3d_For_Website_2.glb" }
];

export default function ProjectDetails() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const resolvedId = params ? params.id : "";
  const project = projects.find(p => p.id === parseInt(resolvedId, 10) || p.name.toLowerCase().replace(/\s+/g, "-") === resolvedId);

  // FIXED: Hook is now placed safely above the "notFound" return check
  useEffect(() => {
    if (!isOpen || !project?.glb || !window.THREE) return;
    let scene, camera, renderer, model, isMounted = true, isDragging = false, prevMouse = { x: 0, y: 0 };

    const init = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || 600, h = containerRef.current.clientHeight || 500;
      scene = new window.THREE.Scene();
      scene.background = new window.THREE.Color(0xf3f4f6);
      camera = new window.THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.set(0, 2, 6);
      scene.add(new window.THREE.AmbientLight(0xffffff, 0.9));
      const dl = new window.THREE.DirectionalLight(0xffffff, 0.6);
      dl.position.set(5, 10, 7);
      scene.add(dl);
      renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      containerRef.current.appendChild(renderer.domElement);

      new window.THREE.GLTFLoader().load(project.glb, (gltf) => {
        if (!isMounted) return;
        model = gltf.scene;
        const box = new window.THREE.Box3().setFromObject(model);
        const size = box.getSize(new window.THREE.Vector3());
        const scale = 2.8 / (Math.max(size.x, size.y, size.z) || 1);
        model.scale.set(scale, scale, scale);
        model.position.sub(box.getCenter(new window.THREE.Vector3()).multiplyScalar(scale));
        scene.add(model);
        const txt = containerRef.current.querySelector(".loading-indicator");
        if (txt) txt.style.display = "none";
      });

      const el = renderer.domElement;
      el.addEventListener("mousedown", () => { isDragging = true; });
      el.addEventListener("mousemove", (e) => {
        if (isDragging && model) {
          model.rotation.y += (e.offsetX - prevMouse.x) * 0.007;
          model.rotation.x += (e.offsetY - prevMouse.y) * 0.007;
        }
        prevMouse = { x: e.offsetX, y: e.offsetY };
      });
      window.addEventListener("mouseup", () => { isDragging = false; });

      const anim = () => {
        if (!isMounted) return;
        requestAnimationFrame(anim);
        if (model && !isDragging) model.rotation.y += 0.003;
        if (renderer && scene && camera) renderer.render(scene, camera);
      };
      anim();
    };

    if (!window.THREE.GLTFLoader) {
      const s1 = document.createElement("script");
      s1.src = "https://cloudflare.com";
      s1.onload = () => {
        const s2 = document.createElement("script");
        s2.src = "https://jsdelivr.net";
        s2.onload = init;
        document.head.appendChild(s2);
      };
      document.head.appendChild(s1);
    } else {
      init();
    }

    return () => {
      isMounted = false;
      if (renderer) { renderer.dispose(); renderer.domElement.remove(); }
    };
  }, [isOpen, project]);

  // The condition check is now placed cleanly down here below our React hooks
  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      <button onClick={() => setIsOpen(true)} className="w-full focus:outline-none block text-left" type="button">
        <img src={project.image} alt={project.name} className="w-full h-96 object-cover rounded cursor-pointer transition-all border-2 border-transparent hover:border-blue-500 hover:brightness-95" />
      </button>
      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <p className="mt-2 text-gray-600">{project.location}</p>
      <p className="mt-4">{project.description}</p>
      <div className="mt-6">
        <a href={project.brochures} download className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">Download Brochure</a>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative shadow-2xl p-6 text-center border border-gray-200">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-50 bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" type="button">x</button>
            <div className="border-b pb-3 mb-4 text-left"><h3 className="font-bold text-xl text-gray-900">Interactive 3D View: {project.name}</h3></div>
            <div ref={containerRef} className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing">
              <div className="loading-indicator text-gray-500 text-sm animate-pulse">Assembling Interactive Layout Mesh...</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
