"use client"; // ✅ Required for useState

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const images = project.images || [project.image];
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="border rounded shadow p-4">
      <div className="relative w-full h-48 overflow-hidden rounded">
        <img
          src={images[current]}
          alt={`${project.name} ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-300"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
            >
              ›
            </button>
          </>
        )}
      </div>

      <h3 className="text-xl font-bold mt-2">{project.name}</h3>
      <p>{project.location}</p>

      <Link href={`/projects/${project.id}`}>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
