import React, { useState, useEffect } from 'react';
import { ThermometerSun, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'Services', href: '/#services' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'FAQ', href: '/#faq' }
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      window.location.href = href;
      return;
    }

    const element = document.querySelector(href.replace('/', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const isContractorsPage = location.pathname === '/contractors';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isContractorsPage
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ThermometerSun className={`h-8 w-8 ${
              isScrolled || isContractorsPage ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-2xl font-bold ${
              isScrolled || isContractorsPage ? 'text-blue-600' : 'text-white'
            }`}>CTMP</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {!isContractorsPage && menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  isScrolled 
                    ? 'text-gray-600 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                } transition-all cursor-pointer`}
              >
                {item.label}
              </button>
            ))}
            <Link
              to={isContractorsPage ? '/' : '/contractors'}
              className={`inline-flex items-center space-x-1 ${
                isScrolled || isContractorsPage
                  ? 'text-blue-600 hover:text-blue-700' 
                  : 'text-blue-200 hover:text-blue-100'
              } transition-all font-medium`}
            >
              <span>{isContractorsPage ? 'For Homeowners' : 'For Contractors'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Button
              size="lg"
              className={`${
                isScrolled || isContractorsPage
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              } text-white transition-all`}
            >
              Join Waitlist
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen 
              ? <X className={isScrolled || isContractorsPage ? 'text-gray-900' : 'text-white'} /> 
              : <Menu className={isScrolled || isContractorsPage ? 'text-gray-900' : 'text-white'} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-6">
              {!isContractorsPage && menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to={isContractorsPage ? '/' : '/contractors'}
                className="text-blue-600 hover:text-blue-700 transition-all font-medium inline-flex items-center"
              >
                <span>{isContractorsPage ? 'For Homeowners' : 'For Contractors'}</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 w-full"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}