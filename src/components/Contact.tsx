import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, Globe, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { usePopup } from "@/pages/Index";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { showPopup } = usePopup();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Show popup after a short delay to let the scroll happen
      setTimeout(() => {
        showPopup('contact-schedule-consultation');
      }, 800);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!consentChecked) {
      alert("Please accept the Consent Undertaking to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '9a3bb822-499f-4cfa-9b56-a7f8a5cc7385',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: `New Business Inquiry from ${formData.firstName} ${formData.lastName} - ${formData.subject}`,
          message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 NEW BUSINESS INQUIRY - PRINZ ADVISORY GROUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION:
   • Name: ${formData.firstName} ${formData.lastName}
   • Email: ${formData.email}
   • Company: ${formData.company || 'Not specified'}

📋 INQUIRY DETAILS:
   • Subject: ${formData.subject}
   • Priority: Business Consultation Request
   • Date: ${new Date().toLocaleDateString('en-IN', {
     weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric',
     timeZone: 'Asia/Kolkata'
   })}
   • Time: ${new Date().toLocaleTimeString('en-IN', {
     hour: '2-digit',
     minute: '2-digit',
     timeZone: 'Asia/Kolkata'
   })} IST

💬 MESSAGE:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔒 CONSENT VERIFICATION:
✅ The client has provided explicit consent for PAG to collect and process their personal and company information for business communication, advisory engagement, and professional services.

📞 RECOMMENDED ACTIONS:
1. Respond within 24 hours as per company policy
2. Schedule initial consultation call
3. Send company brochure and service overview
4. Add contact to CRM system
5. Assign to appropriate team member based on inquiry type

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌟 Prinz Advisory Group - Navigating Possibilities, Inspiring Growth
📧 This inquiry was submitted via: prinzadvisory.online
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          `,
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          // Additional fields for better organization
          company: formData.company || 'Not specified',
          inquiry_type: formData.subject,
          source: 'Website Contact Form - prinzadvisory.online',
          consent_given: 'Yes - Explicit consent provided',
          priority: 'Business Inquiry',
          submission_date: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        setConsentChecked(false);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again or contact us directly at pagsec.in@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Start Your Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to navigate new possibilities and inspire growth? Connect with our team 
            to discuss how we can help transform your business challenges into opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-neutral-200 shadow-lg">
            {submitted ? (
              <>
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-green-600">
                    Message Sent Successfully!
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Thank you for reaching out to us.
                  </p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      What happens next?
                    </h3>
                    <p className="text-green-700 mb-4">
                      Your details have been shared with our team. We will contact you shortly to discuss your requirements and explore how we can help transform your business challenges into opportunities.
                    </p>
                    <div className="text-sm text-green-600">
                      <p>⏱️ Expected response time: Within 24 hours</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        company: '',
                        subject: '',
                        message: ''
                      });
                      setConsentChecked(false);
                    }}
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Get In Touch
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your challenges and let's explore solutions together.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name" 
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">How can we help? *</Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your needs" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your challenges, goals, and how we can support your transformation journey..." 
                        rows={5}
                        required
                      />
                    </div>

                    {/* Consent Undertaking Checkbox */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="consent" 
                          checked={consentChecked}
                          onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="consent" className="text-sm font-medium cursor-pointer">
                            Consent Undertaking:
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            I, hereby consent to Prinz Advisory Group (PAG) collecting and processing my personal and company information for the purposes of business communication, advisory engagement, and related professional services. I understand that my data will be used only for legitimate business purposes, and that I retain the right to access, correct, or request deletion of my data, as well as to withdraw my consent at any time by contacting PAG.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full group" 
                      disabled={isSubmitting || !consentChecked}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">pagsec.in@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">India, serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Website</h4>
                    <p className="text-muted-foreground">prinzadvisory.online</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose PAG */}
            <Card className="bg-gradient-subtle border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Why Choose Prinz Advisory Group?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Holistic Perspective",
                      description: "We look beyond numbers to understand people, processes, and purpose."
                    },
                    {
                      title: "Customized Solutions", 
                      description: "No two clients are the same, and neither are our strategies."
                    },
                    {
                      title: "Hands-on Engagement",
                      description: "We don't just advise; we walk alongside our clients in execution."
                    },
                    {
                      title: "Ethics & Integrity",
                      description: "Every recommendation is rooted in honesty, transparency, and client-centricity."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground text-sm">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="bg-primary rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-primary-foreground/80 mb-4 text-sm">
                Schedule a consultation to discuss your strategic challenges and growth opportunities.
              </p>
              <Button variant="hero" size="sm" onClick={scrollToContact}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
