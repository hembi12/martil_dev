import { useState, useEffect } from "react";
import { testimonialsData } from './data/reviewsData';
import TestimonialCard from './TestimonialCard';
import NavigationControls from './NavigationControls';
import StatsSection from './StatsSection';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  // Mouse hover handlers
  const handleMouseEnter = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  };

  return (
    <section
      id="testimonios"
      className="bg-gradient-to-b from-neutral-50 to-neutral-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-sm">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <TestimonialCard testimonial={testimonialsData[currentIndex]} />
          
          <NavigationControls
            currentIndex={currentIndex}
            totalTestimonials={testimonialsData.length}
            isAutoPlaying={isAutoPlaying}
            onPrevious={prevTestimonial}
            onNext={nextTestimonial}
            onGoToTestimonial={goToTestimonial}
            onToggleAutoPlay={toggleAutoPlay}
          />
        </div>

        {/* Stats and CTA Section */}
        <StatsSection />
      </div>
    </section>
  );
}