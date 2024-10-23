import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Users, MessageSquare, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Post Your Project',
      description: 'Share your HVAC needs and preferences in our simple project form.'
    },
    {
      icon: Users,
      title: 'Get Multiple Bids',
      description: 'Receive competitive offers from pre-vetted HVAC professionals.'
    },
    {
      icon: MessageSquare,
      title: 'Choose & Connect',
      description: 'Select your preferred contractor and manage everything digitally.'
    },
    {
      icon: CheckCircle,
      title: 'Project Success',
      description: 'Complete your project with secure payments and documentation.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold mb-4 block">Simple Process</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your journey to perfect climate control in four simple steps
          </p>
        </div>

        <div className="relative">
          {/* Animated Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 w-1/4 h-full animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative z-10">
                      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-all duration-300">
                        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center transform group-hover:-rotate-6 transition-all duration-300">
                          <Icon className="h-10 w-10 text-blue-600" />
                        </div>
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Project Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}