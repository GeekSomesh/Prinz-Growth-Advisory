import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, ArrowUp, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Prinz Advisory Group</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Navigating Possibilities, Inspiring Growth. We transform ideas into impactful 
                realities through strategic consulting excellence and human-centric solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-primary-foreground/80">pagsec.in@gmail.com</span>
                </div>
                <div>
                  <p className="text-primary-foreground/80 text-sm mb-3">Follow us on:</p>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.linkedin.com/company/prinz-advisory-group-pag/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href="https://youtube.com/@prinzadvisory?si=QXg6h6JkaacccdeI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Business Strategy</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Leadership Development</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Innovation Management</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Brand Positioning</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Policy Advisory</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">About PAG</a></li>
                <li><a href="#leadership" className="hover:text-primary-foreground transition-colors">Leadership</a></li>
                <li><a href="#success-stories" className="hover:text-primary-foreground transition-colors">Success Stories</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/80">
            <p>&copy; 2024 Prinz Advisory Group. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-primary-foreground hover:bg-primary-foreground/10 mt-4 md:mt-0"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;