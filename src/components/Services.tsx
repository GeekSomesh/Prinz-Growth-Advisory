import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Lightbulb, Target, Building, Award } from "lucide-react";
import { usePopup } from "@/pages/Index";

const Services = () => {
  const { showPopup } = usePopup();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Show popup after a short delay to let the scroll happen
      setTimeout(() => {
        showPopup('services-learn-more');
      }, 800);
    }
  };

  const scrollToContactFromCTA = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Show popup after a short delay to let the scroll happen
      setTimeout(() => {
        showPopup('services-schedule-consultation');
      }, 800);
    }
  };
  const services = [
    {
      icon: TrendingUp,
      title: "Business Strategy & Growth Advisory",
      description: "Crafting clear, results-oriented strategies for businesses in competitive markets.",
      features: [
        "Market expansion strategies",
        "Product positioning optimization", 
        "Revenue model development",
        "M&A readiness assessments"
      ]
    },
    {
      icon: Users,
      title: "Leadership & Organizational Development",
      description: "Developing exceptional leaders and high-performance organizational cultures.",
      features: [
        "Executive coaching programs",
        "Leadership pipeline design",
        "Succession planning frameworks",
        "Culture transformation initiatives"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Change Management",
      description: "Guiding organizations through transformational change with strategic innovation.",
      features: [
        "Digital transformation strategies",
        "Innovation framework development",
        "Change management programs",
        "Technology adoption roadmaps"
      ]
    },
    {
      icon: Target,
      title: "Brand & Market Positioning",
      description: "Creating authentic brand narratives that connect with stakeholders.",
      features: [
        "Brand strategy development",
        "Market positioning analysis",
        "Digital presence optimization",
        "Stakeholder engagement strategies"
      ]
    },
    {
      icon: Building,
      title: "Policy & Institutional Advisory",
      description: "Specialized advisory for public sector and educational institutions.",
      features: [
        "Policy formulation support",
        "Institutional development",
        "Capacity building frameworks",
        "Socio-economic impact measurement"
      ]
    },
    {
      icon: Award,
      title: "Performance Excellence",
      description: "Optimizing operational efficiency and driving sustainable performance.",
      features: [
        "Process optimization",
        "Performance measurement systems",
        "Quality improvement programs",
        "Operational excellence frameworks"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Strategic Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated approach combines deep expertise with innovative thinking to deliver 
            transformational results across all aspects of your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-neutral-200 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={scrollToContact}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our strategic consulting services can help you achieve 
            your growth objectives and navigate today's complex business landscape.
          </p>
          <Button variant="cta" size="lg" onClick={scrollToContactFromCTA}>
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;