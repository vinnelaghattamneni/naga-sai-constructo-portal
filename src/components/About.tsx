const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About Us</h2>
          <p className="text-secondary mb-6">
            Naga Sai Steel Corporation has been at the forefront of construction material supply for over two decades. We take pride in delivering superior quality products that meet international standards.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {["Quality Assured", "Timely Delivery", "Expert Support"].map((feature) => (
              <div key={feature} className="p-4 bg-gray-50 rounded-lg animate-fade-up">
                <h3 className="font-bold text-primary mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;