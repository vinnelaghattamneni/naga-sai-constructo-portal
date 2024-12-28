import { Building } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Naga Sai Steel</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
          <a href="#products" className="text-secondary hover:text-primary transition-colors">Products</a>
          <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;