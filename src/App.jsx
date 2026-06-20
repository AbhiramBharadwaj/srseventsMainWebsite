import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import logger from './utils/logger';
import Navbar from './components/Navbar/Navbar';
import BlogPage from './pages/BlogPage';
import Hero from './components/Hero/Hero';
import HeroCard from './components/HeroCard/HeroCard';
import ReviewsSection from './components/ReviewSection/ReviewSection';
import WhoWeAre from './components/HeroCard/WhoWeAre';
import Footer5 from './components/Footer/Footer5';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import PricePage from './pages/PricePage';
import AOS from 'aos';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationAndRefund from './pages/CancellationAndRefund';
import ShippingAndDelivery from './pages/ShippingAndDelivery';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useScrollDirection from './components/Navbar/useScrollDirection';
import { setMeta } from './utils/meta';

// Logger for route changes
const RouteLogger = () => {
  const location = useLocation();
  useEffect(() => {
    logger.info(`Navigated to ${location.pathname}`);
  }, [location]);
  return null;
};

// Main App component
const App = () => {
  const isNavbarVisible = useScrollDirection();

  useEffect(() => {
    logger.info('App component mounted');
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
    logger.debug('AOS initialized with duration 1200 and ease-in-out easing');

    // Tidio Chatbot Integration
    const script = document.createElement('script');
    script.src = "//code.tidio.co/imt7jsbhkyytldtyra77phd3gnnt0fsu.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <RouteLogger />
      <Navbar isVisible={isNavbarVisible} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/price-page" element={<PricePage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cancellation-and-refund" element={<CancellationAndRefund />} />
        <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
      </Routes>
    </Router>
  );
};

// Error Boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logger.error(`An error occurred in component tree: ${error.toString()}, details: ${JSON.stringify(errorInfo)}`);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// HomePage component
const HomePage = () => {
  useEffect(() => {
    logger.info('HomePage rendered');
    setMeta({
      title: "SRS Events and Productions | Wedding Planners in Shivamogga",
      description:
        "SRS Events and Productions delivers wedding planning, corporate events, music nights, decor, AV, catering, and makeup across Shivamogga, Bangalore, Mysore, and Mangalore with flawless execution.",
      keywords: [
        "SRS Events and Productions",
        "wedding planners Shivamogga",
        "wedding planners Karnataka",
        "corporate event planners",
        "music nights and sangeeth",
        "decor and production services",
      ],
    });
  }, []);

  return (
    <>
      <Hero />
      <WhoWeAre />
      <HeroCard />
      <ReviewsSection />
      <Footer5 />
    </>
  );
};

// Wrap the entire App in the ErrorBoundary
const AppWithBoundary = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

export default AppWithBoundary;
