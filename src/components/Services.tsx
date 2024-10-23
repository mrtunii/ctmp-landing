import React from 'react';
import { motion } from 'framer-motion';
import { Fan, Thermometer, Wrench, Shield, Settings, Activity } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Fan,
      title: 'AC Installation',
      description: 'Expert installation of new air conditioning systems for optimal cooling efficiency.',
      gradient: 'from-blue-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      icon: Thermometer,
      title: 'Heating Systems',
      description: 'Professional heating system installation and replacement services.',
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Regular maintenance and tune-ups to keep your HVAC system running smoothly.',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      icon: Activity,
      title: 'Energy Efficiency',
      description: 'Solutions to improve your system\'s energy efficiency and reduce costs.',
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      icon: Shield,
      title: 'Emergency Repairs',
      description: '24/7 emergency repair services for urgent HVAC issues.',
      gradient: 'from-rose-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      icon: Wrench,
      title: 'System Upgrades',
      description: 'Upgrade your existing system with modern, efficient components.',
      gradient: 'from-orange-500 to-amber-500',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&h=300&q=80'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From installation to maintenance, our network of professionals provides comprehensive HVAC solutions for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{service.description}</p>
                    <button className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors inline-flex items-center">
                      Learn More
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}