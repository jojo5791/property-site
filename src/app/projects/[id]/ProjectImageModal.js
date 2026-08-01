"use client";

import { useState } from "react";

export default function ProjectImageModal({ imageSrc, projectName, glbPath, brochurePath }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Image Trigger */}
      {glbPath ? (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full focus:outline-none block text-left"
            type="button"
          >
            <img
              src={imageSrc}
              alt={projectName}
              className="w-full h-96 object-cover rounded cursor-pointer transition-all border-2 border-transparent hover:border-blue-500 hover:brightness-95"
            />
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1.5 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              🔍 Click to open 3D view options
            </div>
          </button>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={projectName}
          className="w-full h-96 object-cover rounded"
        />
      )}

      {/* Pop-up Overlay Modal */}
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

            {/* Header Title */}
            <div className="border-b pb-3 mb-4">
              <h3 className="font-bold text-xl text-gray-900">
                {projectName} Asset Manager
              </h3>
            </div>

            {/* Interactive Panel Card Content */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col items-center justify-center">
              <span className="text-4xl mb-3 block">🏢</span>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                3D Architecture Model Ready
              </h4>
              <p className="text-gray-500 text-xs max-w-sm mb-5 leading-relaxed">
                Click the action link below to download the interactive 3D model file.
              </p>

              <a
                href={glbPath}
                download
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded shadow text-sm transition-colors block text-center"
              >
                Download Model (.GLB)
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
