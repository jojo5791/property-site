"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Like what you see? Drop your details here and we’ll be in touch.
        </p>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We’d love to hear from you. Reach us directly or fill out the form.
            </p>

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <strong>📍 Address:</strong>  
                123 Jalan Example, Kuala Lumpur, Malaysia
              </p>
              <p>
                <strong>📞 Phone:</strong>  
                +60 12-345 6789
              </p>
              <p>
                <strong>✉️ Email:</strong>  
                info@property-site.com
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7966.791684375165!2d101.695!3d3.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d99f0ef2c9%3A0x2b64c8a8c9c0f9!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1695414856438!5m2!1sen!2smy"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                Thank you!
              </h2>
              <p className="text-gray-600">
                We’ve received your message and will be in touch soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
