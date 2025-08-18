import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Quote } from "lucide-react";
import swatiPortrait from "@/assets/swati-portrait.jpg";
import { usePopup } from "@/pages/Index";

const Leadership = () => {
  const { showPopup } = usePopup();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Show popup after a short delay to let the scroll happen
      setTimeout(() => {
        showPopup('leadership-send-message');
      }, 800);
    }
  };
  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Visionary Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the strategic mind behind Prinz Advisory Group's transformational approach 
            to consulting and organizational excellence.
          </p>
        </div>

        {/* Leadership Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative flex justify-center items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img 
                src={swatiPortrait} 
                alt="Swati Srivastava, Founder & CEO of Prinz Advisory Group" 
                className="w-80 h-96 object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Swati Srivastava
              </h3>
              <p className="text-xl text-primary font-semibold mb-4">
                Founder & Chief Executive Officer
              </p>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            {/* Biography */}
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p>
                The driving force behind PAG, Swati Srivastava is a highly respected thought leader 
                and strategist known for her ability to see unseen patterns in complex business landscapes. 
                With a career spanning over two decades, she has transformed organizations across industries.
              </p>
              <p>
                Swati's leadership style blends analytical precision with empathetic insight, creating 
                a rare combination of visionary thinking and practical implementation. Her approach centers 
                on holistic transformation—building resilient teams, fostering innovation, and creating 
                positive societal impact.
              </p>
            </div>

            {/* Quote */}
            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic text-neutral-700 mb-4">
                  "Strategic advice is only as good as the tangible value it creates. 
                  Every recommendation must resonate with real-world challenges and empower 
                  our clients to achieve sustainable success."
                </blockquote>
                <cite className="text-sm font-semibold text-primary">— Swati Srivastava</cite>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-neutral-200">
                <CardHeader className="pb-3">
                  <h4 className="font-semibold text-foreground">Experience</h4>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-neutral-600">Years in Strategic Consulting</div>
                </CardContent>
              </Card>

              <Card className="border-neutral-200">
                <CardHeader className="pb-3">
                  <h4 className="font-semibold text-foreground">Impact</h4>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-neutral-600">Leaders Coached & Developed</div>
                </CardContent>
              </Card>
            </div>

            {/* Expertise Areas */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Strategic Planning",
                  "Leadership Development", 
                  "Organizational Change",
                  "Market Expansion",
                  "Digital Transformation",
                  "Culture Building"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://www.linkedin.com/company/prinz-advisory-group-pag/', '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Button>
              <Button variant="ghost" size="sm" onClick={scrollToContact}>
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Leadership Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">H</span>
              </div>
              <h4 className="font-semibold text-foreground">Holistic Thinking</h4>
              <p className="text-sm text-neutral-600">
                Considering all dimensions of business impact - financial, operational, cultural, and societal.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">E</span>
              </div>
              <h4 className="font-semibold text-foreground">Empathetic Leadership</h4>
              <p className="text-sm text-neutral-600">
                Leading with understanding and emotional intelligence to drive authentic transformation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">I</span>
              </div>
              <h4 className="font-semibold text-foreground">Innovative Solutions</h4>
              <p className="text-sm text-neutral-600">
                Blending proven methodologies with creative approaches to solve complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;