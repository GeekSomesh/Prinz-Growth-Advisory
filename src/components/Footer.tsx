import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Mail, Linkedin, ArrowUp, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);
  
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
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="hover:text-primary-foreground transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTermsConditions(true)}
                className="hover:text-primary-foreground transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
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
      
      {/* Privacy Policy Dialog */}
      <Dialog open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground mb-4">
              Privacy Policy
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none text-foreground space-y-4">
            <p className="text-muted-foreground">
              At Prinz Advisory Group (PAG), we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website, use our services, or interact with us.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
                <p className="text-muted-foreground mb-2">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company details, and other details voluntarily provided via forms, registrations, or consultations.</li>
                  <li><strong>Usage Data:</strong> Information such as IP address, browser type, operating system, referring URLs, and activity on our website.</li>
                  <li><strong>Cookies & Tracking Technologies:</strong> To enhance user experience, we may use cookies, analytics tools, and similar technologies.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
                <p className="text-muted-foreground mb-2">We use the information collected to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Provide and improve our services.</li>
                  <li>Respond to inquiries, requests, or communications.</li>
                  <li>Personalize user experience and recommend relevant services.</li>
                  <li>Send newsletters, updates, and promotional content (with consent).</li>
                  <li>Ensure compliance with legal obligations.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Sharing of Information</h3>
                <p className="text-muted-foreground mb-2">We respect your confidentiality. We do not sell, rent, or trade your personal data to third parties. However, information may be shared in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>With trusted partners, vendors, or service providers assisting in business operations (bound by confidentiality agreements).</li>
                  <li>To comply with legal obligations or protect our rights and safety.</li>
                  <li>In case of mergers, acquisitions, or business restructuring, with prior notice to users.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
                <p className="text-muted-foreground">
                  We employ industry-standard measures to protect your data against unauthorized access, disclosure, or alteration. However, no method of online transmission is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Your Rights</h3>
                <p className="text-muted-foreground mb-2">As a user, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request corrections or updates to your information.</li>
                  <li>Request deletion of your data, subject to legal and contractual obligations.</li>
                  <li>Opt out of marketing communications at any time.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">6. Cookies Policy</h3>
                <p className="text-muted-foreground mb-2">Our website may use cookies to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Improve site performance and usability.</li>
                  <li>Analyze traffic and user behavior.</li>
                  <li>Deliver personalized content.</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  You can disable cookies through your browser settings, though this may affect site functionality.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">7. Third-Party Links</h3>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites and encourage you to review their policies.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">8. Policy Updates</h3>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect business, legal, or regulatory changes. Any updates will be posted on this page with a revised "Last Updated" date.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Terms & Conditions Dialog */}
      <Dialog open={showTermsConditions} onOpenChange={setShowTermsConditions}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground mb-4">
              Terms & Conditions
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none text-foreground space-y-4">
            <p className="text-muted-foreground">
              Welcome to the Prinz Advisory Group (PAG) website. By accessing, browsing, or using this website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
                <p className="text-muted-foreground">
                  By accessing our website or engaging with our services, you acknowledge that you have read, understood, and agree to these Terms & Conditions. If you do not agree, please discontinue use of our site and services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">2. About Prinz Advisory Group</h3>
                <p className="text-muted-foreground">
                  Prinz Advisory Group, is a professional consulting and advisory firm providing leadership development, transformation strategies, organizational growth solutions, and related services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Use of Website</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You agree to use this website for lawful purposes only.</li>
                  <li>You must not use this site to distribute harmful content, malware, or unsolicited communications.</li>
                  <li>Unauthorized use of the site may result in restricted access or legal action.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Intellectual Property</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>All content on this website (including text, graphics, logos, images, and materials) is the intellectual property of Prinz Advisory Group unless otherwise stated.</li>
                  <li>You may not reproduce, modify, distribute, or republish any material without prior written consent.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Services Disclaimer</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Our advisory and consulting services are designed to provide guidance and strategic support; however, final outcomes depend on various factors beyond our control.</li>
                  <li>PAG does not guarantee specific results or performance improvements.</li>
                  <li>The information on the website is for general informational purposes and should not be considered professional or legal advice.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">6. Third-Party Links</h3>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. PAG is not responsible for the content, security, or practices of any external websites. Accessing these links is at your own risk.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">7. Limitation of Liability</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>PAG is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our website or services.</li>
                  <li>While we take measures to ensure accuracy, we make no warranties regarding the completeness, reliability, or timeliness of information provided.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">8. Confidentiality</h3>
                <p className="text-muted-foreground">
                  Any confidential information shared with PAG in the course of engagement will be treated with strict confidentiality and used solely for service delivery, subject to our Privacy Policy.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">9. Payments & Refunds</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Payment terms for consulting and advisory services will be agreed upon separately in client contracts.</li>
                  <li>Refunds, if applicable, will be handled as per the service agreement.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">10. Termination of Use</h3>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate access to our website or services if a user violates these Terms & Conditions or engages in activities that may harm PAG or its clients.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">11. Governing Law</h3>
                <p className="text-muted-foreground">
                  These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">12. Changes to Terms</h3>
                <p className="text-muted-foreground">
                  PAG reserves the right to modify these Terms & Conditions at any time. Updates will be posted on this page with the "Last Updated" date revised. Continued use of our site signifies acceptance of changes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
