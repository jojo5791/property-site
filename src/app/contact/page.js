"use client";
import { useState } from "react";

export default function ContactPage() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
   
  <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      {/* ✅ Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Interested Section */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-2xl font-semibold">Interested?</p>
          <p className="text-xl">Register now</p>
          <p className="text-xl">and</p>
          <p className="text-xl">we&apos;ll be in touch.</p>
        </div>

        {/* Right Column - Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="border p-2 rounded"
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
              consent to the processing of my Personal Data as described in the
              notice{" "}
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
            className="bg-yellow-600 text-white px-4 py-2 rounded"
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
              <p>
                By submitting this form, you hereby consent to Urbane Horizon
                Sdn Bhd ("the Company") and/or any of its related, affiliated,
                or associated companies (collectively, "Urbane Horizon Group")
                collecting, obtaining, storing, and processing your personal
                data provided in this form. This is for the purpose of
                evaluating your feedback, as well as for providing you with
                updates, news, promotional content, and marketing materials
                from the Company and/or the Urbane Horizon Group.
              </p>
              <p>You expressly agree and consent to the Company and/or the Urbane Horizon Group to:</p>
              <ul className="list-disc pl-6">
                <li>Store and process your personal data;</li>
                <li>
                  Disclose your personal data to relevant governmental
                  authorities and/or third parties, where required by law or
                  for legal purposes.
                </li>
              </ul>
              <p>
                Your personal data may also be transferred to, stored, or
                processed in a jurisdiction outside Malaysia, including within
                other companies under the Urbane Horizon Group.
              </p>
              <p>
                In accordance with the Personal Data Protection Act 2010
                ("PDPA"), you may at any time request access to, or correction
                of, your personal data held by the Company and/or the Urbane
                Horizon Group.
              </p>
              <p>
                For the avoidance of doubt, "personal data" shall have the
                meaning assigned to it under the PDPA and includes any data you
                have disclosed in this form.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
