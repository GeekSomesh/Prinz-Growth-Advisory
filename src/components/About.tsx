import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Lightbulb, Heart, Compass } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: Compass,
      title: "Strategy",
      description: "Harnessing the power of strategic thinking to overcome challenges and achieve goals."
    },
    {
      icon: Target,
      title: "Excellence", 
      description: "Delivering outcomes that surpass expectations through meticulous attention to detail."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong, trust-based relationships with clients and partners for mutual success."
    }
  ];

  const striveForValues = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Uncompromising commitment to doing what is right, with transparency and ethical excellence."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously seeking new and better ways to solve complex business challenges."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Ensuring every engagement delivers measurable and lasting value for sustainable growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Prinz Advisory Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A boutique strategic consulting firm that brings together deep expertise, 
            innovative thinking, and a human-centric approach to transform ideas into impactful realities.
          </p>
        </div>

        {/* Mission & Purpose */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Purpose</h3>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                In an era where the speed of change often outpaces the ability to respond, 
                PAG was founded to bridge the gap between ambition and action. We exist to help 
                organizations, entrepreneurs, and professionals navigate uncertainty, unlock 
                opportunities, and sustain competitive advantage.
              </p>
              <p>
                Whether it is reshaping business strategies, enhancing organizational culture, 
                or identifying new growth markets, PAG thrives on designing solutions that are 
                as actionable as they are aspirational.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Approach</h3>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                At its core, PAG operates with a simple yet profound belief: strategic advice 
                is only as good as the tangible value it creates. Every recommendation, framework, 
                and solution is crafted to resonate with real-world challenges.
              </p>
              <p>
                We don't just advise—we empower. Our methodology blends strategic foresight with 
                grounded execution, ensuring that every solution is deeply relevant to the client's 
                current context and future aspirations.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            How We Work
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Insight",
                description: "Engaging with stakeholders to understand aspirations, challenges, and conducting in-depth diagnostics."
              },
              {
                step: "02", 
                title: "Strategic Design",
                description: "Crafting tailored roadmaps with actionable milestones and integrating global best practices."
              },
              {
                step: "03",
                title: "Execution Partnership",
                description: "Providing hands-on implementation support, facilitating workshops, and ensuring team alignment."
              },
              {
                step: "04",
                title: "Impact Measurement",
                description: "Assessing results, refining strategies, and embedding sustainable practices for long-term success."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{phase.step}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-3">{phase.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-neutral-200 hover:border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* We Strive For */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            We Strive For
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {striveForValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-neutral-200 hover:border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center bg-gradient-subtle rounded-2xl p-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Our Vision for the Future
          </h3>
          <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            To be recognized globally as the go-to strategic advisory partner for leaders and 
            organizations that aspire to create meaningful change. We are committed to integrating 
            emerging technologies into our consulting practice, establishing specialized centers 
            of excellence in leadership development, sustainability strategy, and policy innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;