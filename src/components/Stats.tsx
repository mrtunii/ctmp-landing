import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, DollarSign, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    { 
      icon: Users,
      value: '10K+', 
      label: 'Happy Homeowners',
      description: 'Satisfied customers who found their perfect HVAC match'
    },
    { 
      icon: Building2,
      value: '500+', 
      label: 'Vetted Contractors',
      description: 'Professional contractors in our trusted network'
    },
    { 
      icon: DollarSign,
      value: '$2M+', 
      label: 'Project Value',
      description: 'Total value of completed HVAC projects'
    },
    { 
      icon: Star,
      value: '4.9/5', 
      label: 'Average Rating',
      description: 'Based on verified customer reviews'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming the HVAC industry with technology and trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}