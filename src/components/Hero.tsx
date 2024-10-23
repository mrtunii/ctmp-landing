import React from 'react';
import { ArrowRight, Shield, CheckCircle, Star, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {/* Modern geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-8"
            >
              <Star className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium">Coming Soon - Join the Waitlist</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Find Your Perfect{' '}
              <span className="text-blue-400">
                HVAC Match
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100 mb-10 leading-relaxed"
            >
              Be the first to experience our revolutionary HVAC service platform. 
              Sign up for early access and exclusive updates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 px-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <Button
                size="xl"
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group whitespace-nowrap"
              >
                Join Waitlist
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: Shield, text: '100% Vetted Contractors' },
                { icon: CheckCircle, text: 'Licensed & Insured' },
                { icon: Star, text: 'Minimum 4 Years Experience' }
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all"
                >
                  <Icon className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-white">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <Link
                to="/contractors"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                Are you an HVAC contractor?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl p-1 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&h=1000&q=80"
                  alt="HVAC Professional at Work"
                  className="rounded-2xl object-cover w-full h-[600px]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}