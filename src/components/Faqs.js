import React from 'react'
import { useState } from "react";
import { motion } from 'framer-motion';
export default function Faqs(props) {
      const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I participate in the ICO Token sale?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",
    },
    {
      question: "What is ICO Crypto?",
      answer:
        "ICO Crypto is a decentralized blockchain-based platform that enables users to invest in digital assets securely and efficiently.",
    },
    {
      question: "How do I benefit from the ICO Token?",
      answer:
        "By holding our tokens, you can gain access to exclusive platform features, staking rewards, and long-term value appreciation opportunities.",
    },
    {
      question: "How can I purchase bitcoin?",
      answer:
        "You can purchase bitcoin through trusted exchanges or directly via our integrated payment partners after completing your account verification.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={`${ props.mode === "dark"
        ? "bg-[#14102C]" 
        : "bg-[#F5F8FF]"}`}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
      <div className='pt-[100px] pb-20'>
        <h4 className='pb-2 text-xl text-center font-bold text-[#3e7dff]'>FAQ</h4>
        <h2 className={`text-5xl text-center font-bold pb-4 ${ props.mode === "dark"
        ? "text-white" 
        : "text-black"}`}>Frequently Asked Questions</h2>
        <p className={`font-medium max-w-[630px] text-lg text-center mx-auto ${ props.mode === "dark"
        ? "text-[#b5b3bc]" 
        : "text-[#637381]"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, in et dignissim quam condimentum vel.
        </p>
      </div>
          </motion.div>
    <section className="pb-20 ">
       <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
      <div className="mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-10 rounded-lg px-7 py-6 md:px-10 md:py-8 shadow-sm ${ props.mode === "dark"
        ? "bg-[#131b4d]" 
        : "bg-white"}`}
              data-wow-delay={`${index * 0.1}s`}
            >
              <button
                className="faq-btn flex w-full items-center justify-between text-left cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`mr-2 text-base font-bold sm:text-lg md:text-xl cursor-pointer ${ props.mode === "dark"
        ? "text-white" 
        : "text-black"}`}>
                  {faq.question}
                </h3>

                <span className={`icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded-sm text-lg font-semibold ${ props.mode === "dark"
        ? "bg-[#b5b3bc]" 
        : "bg-[#637381]"} ${ props.mode === "dark"
        ? "text-dark" 
        : "text-white"}`}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <g clipPath="url(#clip0_50_132)">
                      <path
                        d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_50_132">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(-0.000488281 0.000488281)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className={`text-[#637381] text-base leading-relaxed ${ props.mode === "dark"
        ? "text-[#b5b3bc]" 
        : "text-[#637381]"}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      </motion.div>
    </section>
    <div className="absolute top-[7110px] -bottom-36 left-0 z-10"><img alt="shape" loading="lazy" width="206" height="637" decoding="async" data-nimg="1" src="faq-shape-1.svg" style={{color: "transparent;"}}/></div>

    <div className="absolute top-[6520px] right-0 z-10"><img alt="shape" loading="lazy" width="172" height="517" decoding="async" data-nimg="1" src="faq-shape-2.svg" style={{color: "transparent;"}}/></div>
    </div>
  )
}
