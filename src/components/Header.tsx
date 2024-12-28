import { Building } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Naga Sai Steel</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">Home</Link>
          <Link to="/products" className="text-secondary hover:text-primary transition-colors">Products</Link>
          <Link to="/about" className="text-secondary hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;