import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, Users, DollarSign, Shield, 
  Clock, Award, Zap, Briefcase, ArrowRight,
  Calendar, MessageSquare, FileText, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContractorsPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Quality Leads',
      description: 'Connect with verified homeowners actively seeking HVAC services.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Higher Revenue',
      description: 'Increase your earnings with pre-qualified, high-value projects.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Verified Projects',
      description: 'All projects are pre-qualified and verified before reaching you.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Streamlined processes save you valuable business hours.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const platformFeatures = [
    {
      title: 'Smart Dashboard',
      description: 'Track leads, manage projects, and analyze performance all in one place.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: BarChart3, text: 'Real-time analytics and insights' },
        { icon: Calendar, text: 'Visual project timeline' },
        { icon: MessageSquare, text: 'Integrated communication tools' }
      ]
    },
    {
      title: 'Project Management',
      description: 'Powerful tools to manage your projects efficiently and professionally.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: FileText, text: 'Digital documentation' },
        { icon: Settings, text: 'Automated workflows' },
        { icon: Briefcase, text: 'Resource management' }
      ]
    }
  ];

  const stats = [
    { value: '93%', label: 'Project Success Rate' },
    { value: '45%', label: 'Average Profit Increase' },
    { value: '2.5x', label: 'Lead Generation Growth' },
    { value: '4.9/5', label: 'Contractor Satisfaction' }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
            alt="HVAC Professional"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30"></div>
          {/* Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-30">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                For HVAC Professionals
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Scale Your HVAC Business{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Effortlessly
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Join our network of elite contractors and get access to pre-qualified leads, 
                cutting-edge tools, and everything you need to grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 hover:from-blue-600 hover:to-indigo-600"
                >
                  Join as a Contractor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Why Top Contractors Choose Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join hundreds of successful HVAC contractors who have transformed their business with our platform
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Powerful Platform Features
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage and scale your HVAC business
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{feature.description}</p>
                  <div className="space-y-4">
                    {feature.features.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-blue-500" />
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 transform rotate-1 rounded-2xl"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our network of successful contractors and start getting high-quality leads today.
              </p>
              <Button
                size="xl"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 hover:from-blue-600 hover:to-indigo-600"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}