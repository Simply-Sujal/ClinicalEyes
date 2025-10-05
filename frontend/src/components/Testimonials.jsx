import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    position: 'Clinical Research Director, PharmaTech Inc.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    text: 'Clinical Eyes transformed our oncology trial data analysis. Their visualization tools provided insights we had missed with traditional methods, ultimately saving us months of development time.',
    company_logo: 'https://placehold.co/200x80/FFFFFF/teal?text=PharmaTech'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'VP of Clinical Operations, BioNova',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    text: 'The adaptive trial design expertise from Clinical Eyes helped us navigate a complex Phase II study. Their statistical approach reduced our sample size needs while maintaining robust power calculations.',
    company_logo: 'https://placehold.co/200x80/FFFFFF/teal?text=BioNova'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    position: 'Head of Regulatory Affairs, MediCore',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Their CDISC implementation was flawless. We submitted to FDA with zero data standards issues - a first for our company. The Clinical Eyes team truly understands regulatory requirements.',
    company_logo: 'https://placehold.co/200x80/FFFFFF/teal?text=MediCore'
  },
  {
    id: 4,
    name: 'James Wilson',
    position: 'Chief Medical Officer, Innovate Therapeutics',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
    text: 'We\'ve worked with many CROs, but Clinical Eyes stands apart with their PK/PD modeling expertise. Their insights directly influenced our dosing strategy and likely saved us from a costly Phase III failure.',
    company_logo: 'https://placehold.co/200x80/FFFFFF/teal?text=Innovate'
  }
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.92,
      filter: "blur(8px)"
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)"
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.92,
      filter: "blur(8px)"
    };
  }
};

// Background pattern SVG for testimonial cards
const PatternBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="testimonial-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
  </svg>
);

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  
  // Calculate the current testimonial index
  const testimonialIndex = Math.abs(page % testimonials.length);

  // Handle swipe gesture
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    
    if (Math.abs(swipe) > 100) {
      const newDirection = swipe < 0 ? 1 : -1;
      setAutoPlay(false);
      setPage([page + newDirection, newDirection]);
      setTimeout(() => setAutoPlay(true), 5000);
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setPage((prevState) => [prevState[0] + 1, 1]);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full mb-4">
            TESTIMONIALS
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            What Our <span className="text-teal-600 font-semibold">Clients</span> Say
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            Discover how we've helped leading pharmaceutical and biotech companies accelerate their clinical development programs.
          </p>
        

        {/* Modern swipeable carousel container */}
        <motion.div 
          ref={constraintsRef}
          className="relative h-[550px] md:h-[400px] w-full overflow-hidden mt-16"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                filter: { duration: 0.4 }
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-teal-50 rounded-2xl shadow-xl p-6 md:p-10 h-full flex flex-col md:flex-row items-center relative overflow-hidden border border-gray-100">
                <PatternBackground />
                
                {/* Gradient overlay for depth */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50/50 to-transparent pointer-events-none"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-100/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100/30 rounded-full blur-xl"></div>
                
                <div className="absolute top-6 right-6 text-teal-500">
                  <Quote size={40} strokeWidth={1.5} className="opacity-20" />
                </div>
                
                {/* Left column - person info */}
                <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center md:items-start relative z-10">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[testimonialIndex].image} 
                      alt={testimonials[testimonialIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 text-center md:text-left font-oxygen">
                    {testimonials[testimonialIndex].name}
                  </h4>
                  
                  <p className="text-sm text-gray-500 text-center md:text-left mb-2 font-oxygen font-normal">
                    {testimonials[testimonialIndex].position}
                  </p>
                  
                  <div className="h-8 w-auto mt-2 opacity-80">
                    <img 
                      src={testimonials[testimonialIndex].company_logo} 
                      alt={`${testimonials[testimonialIndex].name}'s company`}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Right column - testimonial text */}
                <div className="md:w-2/3 md:pl-10 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <p className="text-gray-600 text-lg leading-relaxed mb-4 relative">
                      <span className="text-5xl text-teal-200 absolute -top-6 -left-2">"</span>
                      <span className="italic pl-4 font-oxygen font-normal">{testimonials[testimonialIndex].text}</span>
                      <span className="text-5xl text-teal-200 absolute -bottom-10 right-0">"</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Modern indicator dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAutoPlay(false);
                setPage([i, i > testimonialIndex ? 1 : -1]);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className={`transition-all duration-500 ${
                i === testimonialIndex 
                  ? "w-10 h-1.5 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full shadow-sm" 
                  : "w-3 h-3 bg-gray-200 rounded-full hover:bg-teal-200"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
