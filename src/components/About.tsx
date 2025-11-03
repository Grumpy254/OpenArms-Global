export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission is Simple:
              <span className="text-charity-primary"> Help Communities Thrive</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 2010, Hope Foundation has been dedicated to creating sustainable change 
              in underserved communities around the world. We believe that every person 
              deserves access to education, healthcare, and economic opportunities.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Through our community-driven approach, we work directly with local leaders 
              and organizations to implement programs that create lasting impact and 
              empower communities to build their own sustainable futures.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-charity-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">Education</div>
                <div className="text-gray-600">Building schools & literacy programs</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-charity-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">Healthcare</div>
                <div className="text-gray-600">Medical clinics & wellness programs</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-charity-primary/10 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-charity-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Community First</h3>
                <p className="text-gray-600">
                  Every project starts with listening to the community&apos;s needs and 
                  working together to find sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}