// src/components/FAQ.jsx
import React, { useState } from "react";

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow-sm mb-2">
            <button
              className="p-3 w-full text-left cursor-pointer flex justify-between items-center"
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="text-base font-sm text-gray-800">
                {item.question}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div
                id={`faq-content-${index}`}
                className="p-3 border-t text-sm border-gray-200 transition-max-height duration-300 ease-in-out"
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
