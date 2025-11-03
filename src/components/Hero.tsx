export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-charity-primary to-blue-800 text-white section-padding pt-24">
      <div className="container-custom">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Creating Hope,
            <br />
            <span className="text-yellow-300">Changing Lives</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join us in making a lasting impact on communities worldwide through education, 
            healthcare, and sustainable development programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              Start Helping Today
            </button>
            <button className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-charity-primary">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container-custom mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-yellow-300">50,000+</div>
            <div className="text-lg opacity-90">Lives Impacted</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-yellow-300">25</div>
            <div className="text-lg opacity-90">Countries Served</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-yellow-300">100+</div>
            <div className="text-lg opacity-90">Active Programs</div>
          </div>
        </div>
      </div>
    </section>
  )
}