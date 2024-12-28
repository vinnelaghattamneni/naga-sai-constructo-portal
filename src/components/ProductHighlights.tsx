import { Building2, Factory } from "lucide-react";

const ProductHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Our Premium Products
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-up">
            <Building2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">TMT Steel Bars</h3>
            <ul className="space-y-2 text-secondary">
              <li>• Fe 500, Fe 550, and Fe 600 grade options</li>
              <li>• Superior strength and ductility</li>
              <li>• Earthquake-resistant properties</li>
              <li>• Excellent bonding with concrete</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-up">
            <Factory className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Premium Cement</h3>
            <ul className="space-y-2 text-secondary">
              <li>• OPC and PPC variants available</li>
              <li>• High compressive strength</li>
              <li>• Optimal setting time</li>
              <li>• Enhanced durability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;