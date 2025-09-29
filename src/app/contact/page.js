"use client";
import { useState } from "react";

export default function ContactPage() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-3xl font-bold mb-12 text-center">Contact Us</h1>

      {/* ✅ Centered container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Message Section */}
        <div className="bg-yellow-500 p-8 rounded-xl shadow-md flex flex-col justify-center">
          <p className="text-2xl font-bold text-black leading-relaxed">
            Like what you see? <br />
            Drop your details here.
          </p>
        </div>

        {/* Right Column - Form */}
        <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="border p-3 rounded-lg"
          />

          {/* Checkbox: future communications */}
          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input type="checkbox" className="mt-1" />
            <span>I agree to receive future communications from us.</span>
          </label>

          {/* Checkbox: privacy with (more) */}
          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input type="checkbox" className="mt-1" />
            <span>
              I have read and understood the terms of the Privacy Notice and
              consent to the processing of my Personal Data{" "}
              <button
                type="button"
                onClick={() => setShowPrivacy(true)}
                className="text-blue-600 underline"
              >
                (more)
              </button>
            </span>
          </label>

          <button
            type="submit"
            className="bg-yellow-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2 text-center">
              Privacy Notice and Consent
            </h2>
            <h3 className="text-sm font-medium text-center mb-4">
              Data Protection and Privacy Policy
            </h3>
            <div className="text-gray-700 text-sm space-y-4 max-h-96 overflow-y-auto">
              {/* your privacy notice text stays the same */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
