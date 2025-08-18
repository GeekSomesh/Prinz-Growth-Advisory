import { useState, createContext, useContext } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import SuccessStories from "@/components/SuccessStories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactPopup from "@/components/ContactPopup";

// Create context for popup management
const PopupContext = createContext<{
  showPopup: (source?: string) => void;
} | null>(null);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within PopupProvider');
  }
  return context;
};

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState('');

  const showPopup = (source = 'button') => {
    setPopupSource(source);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSource('');
  };

  return (
    <PopupContext.Provider value={{ showPopup }}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Leadership />
          <SuccessStories />
          <Contact />
        </main>
        <Footer />
        
        {/* Contact Popup */}
        <ContactPopup 
          isOpen={isPopupOpen} 
          onClose={closePopup} 
          triggerSource={popupSource}
        />
      </div>
    </PopupContext.Provider>
  );
};

export default Index;
