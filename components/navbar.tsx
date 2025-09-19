import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      {/* Header */}
      <header className="bg-white/50 backdrop-blur-md shadow-lg border-b border-gray-100/50 px-8 py-4 flex justify-between items-center fixed w-full top-0 z-50">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-extrabold text-blue-600">✦</span>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Davipsalms
          </h1>
        </div>
        {/* <nav className="flex space-x-6 "> */}
          <div className="flex flex-row gap-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Projection Module
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Search & Fetch Module
            </a>
          </div>
          <div className="flex flex-row gap-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Settings
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Help
            </a>
          </div>
        {/* </nav> */}
      </header>
    </main>
  );
}
