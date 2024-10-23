import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, MessageSquare, CreditCard, ClipboardCheck, 
  Shield, Calendar, Phone, Star
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Smart Documentation',
      description: 'Digitize your HVAC documentation with our intelligent system.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Communication',
      description: 'Real-time chat and updates between you and your contractor.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Protected milestone-based payment system for peace of mind.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assurance',
      description: 'Rigorous verification process for all HVAC professionals.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform streamlines your HVAC project from start to finish
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative z-20 p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-200 mb-6">{feature.description}</p>
                  <div className="mt-auto">
                    <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors group-hover:translate-x-2 inline-flex items-center">
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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