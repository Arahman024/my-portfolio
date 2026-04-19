export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-500">Md Abdul Rahman</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-xl">
          Full Stack Developer — React, Node.js, Python, Django, FastAPI
        </p>

        <a
          href="mailto:mdabdulrahmanaslam@gmail.com"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition"
        >
          Contact Me
        </a>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {["React", "Next.js", "Tailwind", "Node.js", "Python", "Django", "FastAPI", "MongoDB", "Spring Boot"].map((skill) => (
          <div key={skill} className="bg-gray-800 text-center px-6 py-3 rounded-xl text-gray-200 font-medium">
            {skill}
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="text-center text-gray-500 text-sm">
        🚀 Projects coming soon...
      </div>

    </main>
  );
}