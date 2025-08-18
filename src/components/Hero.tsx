import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Linkedin, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import { usePopup } from "@/pages/Index";

const Hero = () => {
  const { showPopup } = usePopup();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Show popup after a short delay to let the scroll happen
      setTimeout(() => {
        showPopup('hero-start-transformation');
      }, 800);
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional consulting excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Tagline */}
            <div className="flex items-center mb-6">
              <CheckCircle className="h-5 w-5 text-white mr-2" />
              <span className="text-sm font-medium tracking-wide uppercase">Strategic Excellence with Human Centric Approach</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Navigating Possibilities,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-200">
                Inspiring Growth
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed">
              Transform your vision into measurable results with Prinz Advisory Group's 
              strategic consulting excellence and human-centric approach.
            </p>

            {/* Value Propositions */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Strategic Business Advisory",
                "Leadership Development", 
                "Organizational Transformation",
                "Market Expansion Planning"
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-white mr-3 flex-shrink-0" />
                  <span className="text-neutral-200">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" onClick={scrollToContact}>
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary" onClick={scrollToServices}>
                Learn More
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <p className="text-neutral-200 text-sm mb-4">Follow us on:</p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/company/prinz-advisory-group-pag/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors pt-1.5 pb-2.5 px-2"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
                <a 
                  href="https://youtube.com/@prinzadvisory?si=QXg6h6JkaacccdeI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors pt-1.5 pb-2.5 px-2"
                >
                  <Youtube className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-xl font-semibold mb-6">Proven Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-neutral-200">Strategic Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-neutral-200">Client Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-neutral-200">Average Growth Achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;