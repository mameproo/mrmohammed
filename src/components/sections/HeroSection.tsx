import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';
import { TypewriterEffect } from '../TypewriterEffect';
import heroImage from '../../assets/hero-bg.jpg';
import profileImage from '../../assets/profile.png';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blurred and dark overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        background: '',
        width: '100%',
        height: '100%',
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glass-card p-2"
          >
            <img 
              src={profileImage} 
              alt="Mr Mohammed" 
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Mr <span className="gradient-text">Mohammed</span>
          </motion.h1>

          {/* Typewriter Effect */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-16 flex items-center justify-center"
            >
            <TypewriterEffect
              texts={[
              "Junior Web Pentester",
              "Web Developer & Designer",
              "Arduino & Sensors Explorer",
              "Problem Solver"
              ]}
              speed={100}
              deleteSpeed={50}
              delayBetween={2000}
            />
            </motion.div>

          {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              I'm an IT guy, always exploring and trying new things in tech.
            </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              className="btn-hero btn-primary group"
            >
              Hire Me
              <motion.span
                className="ml-2 inline-block"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                →
              </motion.span>
            </Button>
            
            <Button
              variant="outline"
              className="btn-hero btn-secondary group"
              asChild
            >
              <a
                href="/cv.pdf" // Place your CV file in the public folder as cv.pdf
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button 
            onClick={scrollToAbout}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
