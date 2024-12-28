import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductHighlights from "@/components/ProductHighlights";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductHighlights />
      </main>
    </div>
  );
};

export default Home;