export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          No. 123, Jalan Example, 43000 Kajang, Selangor, Malaysia
        </p>
      </div>
    </footer>
  );
}
