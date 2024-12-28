import { Construction, Warehouse } from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up">
            <Construction className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Premium Steel</h3>
            <p className="text-secondary">
              High-quality TMT bars, structural steel, and reinforcement solutions for construction projects of all sizes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up">
            <Warehouse className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Superior Cement</h3>
            <p className="text-secondary">
              Durable and reliable cement products ensuring strength and longevity for your construction needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;