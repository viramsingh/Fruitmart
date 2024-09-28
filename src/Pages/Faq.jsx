import React, { useState } from "react";

const FAQ = () => {
  // Sample FAQ data
  const faqData = [
    {
      question: "What is FruitMart?",
      answer:
        "FruitMart is an online platform offering a wide range of fresh fruits delivered to your doorstep.",
    },
    {
      question: "How can I place an order?",
      answer:
        "To place an order, simply browse our products, add them to your cart, and proceed to checkout.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods, including credit cards, debit cards, and online payment gateways.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, once your order is placed, you will receive a tracking link via email or SMS.",
    },
    {
      question: "What is the return policy?",
      answer:
        "If you are not satisfied with your purchase, you can return it within 7 days for a full refund.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ item visibility
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-4xl font-bold text-center text-primary font-poppins">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="p-4 mb-4 bg-white border rounded-lg shadow-sm"
          >
            <button
              className="w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-secondary">
                {faq.question}
              </h3>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
