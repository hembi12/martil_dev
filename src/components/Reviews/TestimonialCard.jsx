import { Star, Quote } from "lucide-react";
import { iconMap } from './data/reviewsData';

const TestimonialCard = ({ testimonial }) => {
  const getInitials = (name) => {
    const names = name.split(" ");
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name[0]?.toUpperCase() || "";
  };

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 sm:p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-200" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-blue-50 font-bold text-lg sm:text-xl">
                {getInitials(testimonial.name)}
              </span>
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1">
              {testimonial.name}
            </h3>
            <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2">
              {testimonial.business}
            </p>
            <div className="flex items-center gap-2 mb-2">
              {renderIcon(testimonial.categoryIcon)}
              <span className="text-neutral-500 text-sm">
                {testimonial.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span>{testimonial.location}</span>
              <span>•</span>
              <span>{testimonial.businessType}</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <p className="text-xs text-neutral-400 mb-1 text-left sm:text-right">
              {testimonial.date}
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating
                      ? "text-yellow-400 fill-current"
                      : "text-neutral-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-neutral-500 text-right">
              {testimonial.rating}/5 estrellas
            </p>
          </div>
        </div>

        <blockquote className="text-neutral-700 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
          "{testimonial.review}"
        </blockquote>

        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
          <span>Servicio:</span>
          <span className="font-semibold">{testimonial.service}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;