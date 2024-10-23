import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does the bidding process work?',
      answer: 'After posting your project, verified contractors will review your requirements and submit detailed bids. Each bid includes pricing, timeline, and scope of work. You can compare bids, contractor profiles, and reviews before making your choice.'
    },
    {
      question: 'Are all contractors licensed and insured?',
      answer: 'Yes, all contractors on CTMP are thoroughly vetted. We verify their licenses, insurance, and require a minimum of 4 years of experience. We also continuously monitor their performance and customer satisfaction.'
    },
    {
      question: 'What happens after I accept a bid?',
      answer: 'Once you accept a bid, you\'ll be connected with the contractor through our secure platform. You can discuss details, share documents, and coordinate the project timeline. Payment is held securely until you\'re satisfied with the work.'
    },
    {
      question: 'Is there a fee to post a project?',
      answer: 'No, posting a project on CTMP is completely free. We only charge a small service fee to contractors when they win a project, ensuring you get competitive bids without any upfront costs.'
    },
    {
      question: 'How long does it typically take to receive bids?',
      answer: 'Most projects receive their first bids within 24 hours. We recommend waiting for 3-5 bids to ensure you get competitive pricing and can choose the best contractor for your needs.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-xl ${
                  openIndex === index ? 'bg-blue-50' : 'bg-gray-50 hover:bg-gray-100'
                } transition-colors duration-200`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg pr-8">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}