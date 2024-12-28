import { Shield, Award, Clock, Truck } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Why Choose Our Products?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg text-center animate-fade-up">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">Quality Assured</h3>
            <p className="text-secondary">ISI certified products meeting international standards</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center animate-fade-up">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">Premium Grade</h3>
            <p className="text-secondary">High-strength materials for lasting durability</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center animate-fade-up">
            <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">Quick Delivery</h3>
            <p className="text-secondary">Timely delivery to keep your project on schedule</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center animate-fade-up">
            <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">Pan India Supply</h3>
            <p className="text-secondary">Nationwide delivery network for your convenience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;