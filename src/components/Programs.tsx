export default function Programs() {
  const programs = [
    {
      title: "Education Access",
      description: "Building schools, providing scholarships, and training teachers in remote communities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      impact: "15,000 students supported",
      color: "bg-blue-500"
    },
    {
      title: "Healthcare Initiative",
      description: "Mobile clinics, vaccination programs, and health education in underserved areas.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      impact: "25,000 lives improved",
      color: "bg-red-500"
    },
    {
      title: "Clean Water Projects",
      description: "Installing wells, water purification systems, and sanitation facilities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h2a2 2 0 012 2v12a4 4 0 01-4 4H7m2-16v16" />
        </svg>
      ),
      impact: "200 communities served",
      color: "bg-cyan-500"
    },
    {
      title: "Economic Empowerment",
      description: "Microfinance, vocational training, and small business support programs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      impact: "5,000 entrepreneurs supported",
      color: "bg-green-500"
    },
    {
      title: "Emergency Relief",
      description: "Disaster response, emergency supplies, and reconstruction efforts.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      impact: "10,000 people helped",
      color: "bg-orange-500"
    },
    {
      title: "Environmental Conservation",
      description: "Reforestation, renewable energy, and sustainable farming practices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      impact: "1M trees planted",
      color: "bg-emerald-500"
    }
  ]

  return (
    <section id="programs" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on sustainable solutions that address the root causes of poverty 
            and inequality, creating lasting change in communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className={`w-16 h-16 ${program.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="text-sm font-semibold text-charity-primary">{program.impact}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  )
}