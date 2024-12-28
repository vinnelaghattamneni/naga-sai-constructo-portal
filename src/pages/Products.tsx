import Header from "@/components/Header";
import ProductsSection from "@/components/Products";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProductsSection />
      </main>
    </div>
  );
};

export default Products;