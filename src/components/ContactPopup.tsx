import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Mail, ArrowDown } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  triggerSource?: string;
}

const ContactPopup = ({ isOpen, onClose, triggerSource = "button" }: ContactPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Auto close after 8 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for fade out animation
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <Card 
        className={`max-w-md w-full mx-auto bg-white shadow-2xl border-primary/20 transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="text-center relative pb-4">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-neutral-100"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <CardTitle className="text-2xl font-bold text-foreground mb-2">
            Ready to Get Started?
          </CardTitle>
          
          <p className="text-muted-foreground">
            Send us your details so we can contact you and discuss how we can help transform your business!
          </p>
        </CardHeader>

        <CardContent className="text-center space-y-6">
          <div className="bg-gradient-subtle rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>Fill out the contact form below</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>Our team will review your requirements</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>We'll contact you within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full group"
              onClick={handleClose}
            >
              Fill Contact Form
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleClose}
            >
              Maybe Later
            </Button>
          </div>

          <div className="text-xs text-neutral-500">
            This popup will close automatically in a few seconds
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPopup;
