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

        {/* Contact Button */}
        <a
          href="mailto:mdabdulrahmanaslam@gmail.com"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition"
        >
          Contact Me
        </a>

        {/* GitHub Profile Button */}
        <a
          href="https://github.com/Arahman024"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block border border-gray-600 hover:border-blue-500 text-gray-400 hover:text-blue-400 px-8 py-3 rounded-full text-lg transition"
        >
          GitHub Profile
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
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Projects</h2>
        
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Portfolio Website
          </h3>
          <p className="text-gray-400 mb-4">
            Personal portfolio built with Next.js and Tailwind CSS. Deployed on Vercel.
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/Arahman024/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
            >
              GitHub
            </a>

            <a
              href="https://my-portfolio-psi-swart-19.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}