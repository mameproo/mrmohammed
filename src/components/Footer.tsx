import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Mr Mohammed Portfolio.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Contact
              </a>
            </nav>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="hover:glow transition-all duration-300 group"
            >
              <ArrowUp className="h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};