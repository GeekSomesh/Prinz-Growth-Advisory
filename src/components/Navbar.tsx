import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePopup } from "@/pages/Index";
import pagLogo from "@/assets/pag-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { showPopup } = usePopup();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Show popup after a short delay to let the scroll happen
      setTimeout(() => {
        showPopup('navbar-get-started');
      }, 800);
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Check if user has scrolled past a smaller threshold for quicker response
          const heroHeight = window.innerHeight * 0.5; // 50% of viewport height for faster trigger
          setIsScrolled(window.scrollY > heroHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Leadership", href: "#leadership" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-lg' 
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={pagLogo} 
              alt="Prinz Advisory Group Logo" 
              className="h-12 w-12 mr-3 rounded-full object-cover"
            />
            <h1 className={`text-xl font-bold transition-colors duration-200 ease-out ${
              isScrolled ? 'text-primary' : 'text-white drop-shadow-lg'
            }`}>
              PRINZ ADVISORY GROUP
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-200 ease-out font-medium tracking-wide ${
                    isScrolled 
                      ? 'text-neutral-700 hover:text-primary' 
                      : 'text-white/90 hover:text-white hover:drop-shadow-lg'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="sm" className={`hover:scale-105 transition-all duration-200 ease-out font-semibold shadow-lg ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white text-primary hover:bg-white/90'
            }`} onClick={scrollToContact}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-all duration-200 ease-out ${
                isScrolled 
                  ? 'text-neutral-700 hover:bg-neutral-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md border-t border-white/20">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="cta" size="sm" className="w-full bg-white text-primary hover:bg-white/90 font-semibold" onClick={scrollToContact}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;