import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, ArrowUpRight } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      icon: TrendingUp,
      category: "Business Turnaround",
      title: "Manufacturing Excellence Transformation",
      description: "Helped a mid-sized manufacturing company navigate post-pandemic challenges through strategic diversification and process optimization.",
      results: [
        { metric: "30%", label: "Revenue Growth" },
        { metric: "18 months", label: "Transformation Timeline" },
        { metric: "40%", label: "Efficiency Improvement" }
      ],
      industry: "Manufacturing",
      challenge: "Post-pandemic revenue decline and operational inefficiencies",
      solution: "Strategic diversification, process optimization, and market repositioning",
      outcome: "Achieved sustainable growth and market leadership position"
    },
    {
      icon: Users,
      category: "Leadership Development",
      title: "Retail Chain Leadership Transformation",
      description: "Coached executive leadership team to enhance decision-making agility and improve organizational culture.",
      results: [
        { metric: "85%", label: "Employee Engagement" },
        { metric: "45%", label: "Faster Decision Making" },
        { metric: "95%", label: "Leadership Retention" }
      ],
      industry: "Retail",
      challenge: "Slow decision-making processes and declining employee morale",
      solution: "Executive coaching, leadership development programs, and culture transformation",
      outcome: "Created high-performance leadership culture with improved business results"
    },
    {
      icon: Award,
      category: "Policy Impact",
      title: "Educational Institution Framework",
      description: "Partnered with educational body to create inclusive admission framework ensuring fair opportunities for underrepresented groups.",
      results: [
        { metric: "60%", label: "Diversity Increase" },
        { metric: "100%", label: "Compliance Achievement" },
        { metric: "25%", label: "Student Success Rate" }
      ],
      industry: "Education",
      challenge: "Need for inclusive admission processes and fair representation",
      solution: "Policy framework development, stakeholder engagement, and implementation support",
      outcome: "Established model framework adopted by multiple institutions"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Proven Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed businesses and organizations across industries, 
            delivering measurable results and sustainable growth.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-neutral-200 hover:border-primary/30 bg-background">
              {/* Header */}
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <story.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {story.category}
                  </Badge>
                </div>
                
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {story.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{story.industry}</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {story.description}
                </p>

                {/* Key Results */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-neutral-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-neutral-700">Challenge:</span>
                    <p className="text-neutral-600 mt-1">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-700">Solution:</span>
                    <p className="text-neutral-600 mt-1">{story.solution}</p>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-700">Outcome:</span>
                    <p className="text-neutral-600 mt-1">{story.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-8">
            Our Track Record of Excellence
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-foreground">200+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">95%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">30%</div>
              <div className="text-primary-foreground/80">Average Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/80">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;