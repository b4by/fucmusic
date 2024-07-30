"use client";

import questions from "@/constants/questions";
import React, { useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between bg-gray-100 px-6 py-4 text-left text-lg font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`h-6 w-6 transition-transform duration-200 ${isOpen ? "rotate-180 transform" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-gray-50 px-6 py-4 text-gray-600">
          <pre className="whitespace-pre-line">{content}</pre>
        </div>
      )}
    </div>
  );
};

const RulesAccordion = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        {questions.map((question, index) => (
          <Accordion
            key={index}
            title={question.title}
            content={question.content}
          />
        ))}
      </div>
    </div>
  );
};

export default RulesAccordion;
