export default function Impact() {
  return (
    <section id="impact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how your support is making a real difference in communities around the world.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-charity-primary mb-2">50K+</div>
            <div className="text-gray-600">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-charity-secondary mb-2">120</div>
            <div className="text-gray-600">Schools Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-charity-accent mb-2">500</div>
            <div className="text-gray-600">Water Wells</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">25</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-charity-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Maria&apos;s Education Journey</h3>
                <p className="text-gray-600 mb-4">
                  &quot;Thanks to the scholarship program, I was able to complete my education and 
                  become a teacher. Now I&apos;m giving back to my community by teaching 50 children 
                  in our new school.&quot;
                </p>
                <div className="text-sm text-charity-primary font-semibold">Guatemala, 2023</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-charity-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h2a2 2 0 012 2v12a4 4 0 01-4 4H7m2-16v16" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Clean Water for All</h3>
                <p className="text-gray-600 mb-4">
                  &quot;The new well has changed everything for our village. Children no longer 
                  get sick from dirty water, and we can focus on education instead of 
                  walking hours to fetch water.&quot;
                </p>
                <div className="text-sm text-charity-secondary font-semibold">Kenya, 2023</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-charity-primary to-charity-secondary rounded-lg p-8 text-white text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Make Your Impact?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of supporters who are creating positive change around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-charity-primary hover:bg-gray-100">
              Donate Monthly
            </button>
            <button className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-charity-primary">
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}