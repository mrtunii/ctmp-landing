import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
      content: 'CTMP made finding a reliable HVAC contractor so easy. The whole process was transparent and stress-free.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
      content: 'As a property manager, I appreciate how CTMP streamlines the entire HVAC installation process. Excellent service!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-time Homeowner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
      content: 'The digital documentation and secure payment system gave me peace of mind throughout my AC installation.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-300 font-semibold mb-4 block">Testimonials</span>
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Real experiences from homeowners who found their perfect HVAC solution through CTMP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/15 transition-all duration-300">
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="text-blue-50 mb-6">{testimonial.content}</p>
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}