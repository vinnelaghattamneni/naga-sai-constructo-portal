const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Building Tomorrow's Infrastructure Today
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8">
            Your trusted partner in construction materials, providing premium steel and cement solutions for all your building needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
              Explore Products
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;