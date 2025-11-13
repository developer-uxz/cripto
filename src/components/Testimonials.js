import React from 'react'
import { motion } from 'framer-motion';
const testimonials = [
  {
    name: "Jason Keys",
    role: "CEO & Founder @ Dreampeet",
    image: `${process.env.PUBLIC_URL}/image-01 (1).webp`,
    quote:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.",
  },
  {
    name: "Mariya Merry",
    role: "CEO & Founder @ Betex",
    image: `${process.env.PUBLIC_URL}/image-02 (1).webp`,
    quote:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.",
  },
  {
    name: "Andria Jolly",
    role: "CEO & Founder @ CryptoX",
    image: `${process.env.PUBLIC_URL}/image-03 (1).webp`,
    quote:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.",
  },
  {
    name: "Devid Willium",
    role: "CEO & Founder @ Coinbase",
    image: `${process.env.PUBLIC_URL}/image-04 (1).webp`,
    quote:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.",
  },
];

export default function Testimonials(props) {
  return (
    <>
      <div>
        <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <div className={`pt-[120px] pb-20 ${ props.mode === "dark"
        ? "bg-[#14102C]" 
        : "bg-[#F5F8FF]"}`}>
        <h4 className='pb-2 text-xl text-center font-bold text-[#3e7dff]'>TESTIMONIALS</h4>
        <h2 className={`text-5xl text-center font-bold pb-4 ${ props.mode === "dark"
        ? "text-white" 
        : "text-black"}`}>What Our Client Say's</h2>
        <p className={`font-medium max-w-[630px] text-lg text-center mx-auto text-[#637381] ${ props.mode === "dark"
        ? "text-[#b5b3bc] " 
        : "text-[#637381]"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, in et dignissim quam condimentum vel.
        </p>
      </div>
          </motion.div>

          <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
      >
    <section className={`pb-20 ${ props.mode === "dark"
        ? "bg-[#14102C]" 
        : "bg-[#F5F8FF]"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 px-4 mb-10"
            >
              <div className={`relative z-10 overflow-hidden rounded-xl p-8 sm:p-10  transition-all duration-300 ${ props.mode === "dark"
        ? "bg-[#131B4D] " 
        : "bg-white"}`}>
                {/* Background shape */}
                <div className="absolute top-0 right-0 z-[-1]">
                  <img
                     src={`${process.env.PUBLIC_URL}/testimonial-shape.svg`}
                    alt="shape"
                    className="w-[200px]"
                  />
                </div>

                {/* Profile Section */}
                <div className="flex items-center mb-8">
                  <div className="mr-5 h-20 w-20 overflow-hidden rounded-md">
                    <img
                      src={t.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${ props.mode === "dark"
        ? "text-white" 
        : "text-gray-900"}`}>
                      {t.name}
                    </h3>
                    <p className={`text-sm ${ props.mode === "dark"
        ? "text-white" 
        : "text-gray-500"}`}>
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className={`text-base leading-relaxed font-medium ${ props.mode === "dark"
        ? "text-[#b5b3bc]" 
        : "text-[#637381]"}`}>
                  “{t.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.div>
    </div>
    <div className='container mx-8 py-[100px]'>
    <div className='flex flex-wrap -mx-4' >
    <div className='w-full md:w-1/1 lg:w-1/2 px-4'>
    <div className='mt-[80px]'>
      <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
          <h3 className='text-2xl text-[#3e7dff] font-bold mb-3'>
            Download Our App
          </h3>
          <p className={`text-[45px] font-bold leading-12 mb-5 ${ props.mode === "dark"
        ? "text-white" 
        : "text-black"}`}>
            The choice is yours,<br />we've got you covered
          </p>
          <p className={`max-w-[500px] text-lg font-medium mb-10 ${ props.mode === "dark"
        ? "text-[#b5b3bc]" 
        : "text-[#637381]"}`}>Lorem ipsum dolor sit ame t, consectetur adipiscing elit. Fusce tristique, nisl ut viverra porttitor, dolor sem lacinia orci, et pretium quam mi a eros sed molestie est.

</p>
</motion.div>
<motion.div
            initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
 <div className="-mx-3 flex ">
      {/* App Store Button */}
      <div className="px-3">
        <a
          href="#"
          className={`flex items-center justify-center rounded-full border border-[#2D2947] bg-[#2D2947] p-2.5 pr-5 text-base font-semibold text-white ${ props.mode === "dark"
        ? "hover:bg-[#2D2947]/90" 
        : " hover:bg-[#2D2947]/90"}`}
        >
          <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#3e7dff] text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7101 19.5C17.8801 20.74 17.0001 21.95 15.6601 21.97C14.3201 22 13.8901 21.18 12.3701 21.18C10.8401 21.18 10.3701 21.95 9.10009 22C7.79009 22.05 6.80009 20.68 5.96009 19.47C4.25009 17 2.94009 12.45 4.70009 9.39C5.57009 7.87 7.13009 6.91 8.82009 6.88C10.1001 6.86 11.3201 7.75 12.1101 7.75C12.8901 7.75 14.3701 6.68 15.9201 6.84C16.5701 6.87 18.3901 7.1 19.5601 8.82C19.4701 8.88 17.3901 10.1 17.4101 12.63C17.4401 15.65 20.0601 16.66 20.0901 16.67C20.0601 16.74 19.6701 18.11 18.7101 19.5ZM13.0001 3.5C13.7301 2.67 14.9401 2.04 15.9401 2C16.0701 3.17 15.6001 4.35 14.9001 5.19C14.2101 6.04 13.0701 6.7 11.9501 6.61C11.8001 5.46 12.3601 4.26 13.0001 3.5Z"
                fill="white"
              ></path>
            </svg>
          </span>
          App Store
        </a>
      </div>

      {/* Play Store Button */}
      <div className="px-3">
        <a
          href="#"
          className={`flex items-center justify-center rounded-full border border-[#2D2947] bg-transparent p-[10px] pr-5 text-base font-semibold ${ props.mode === "dark"
        ? "hover:bg-[#2D2947]" 
        : "hover:bg-[#2D294710]"} ${ props.mode === "dark"
        ? "text-white" 
        : "text-[#2D2947]"}`}
        >
          <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#131b4d] text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M3 20.5V3.50002C3 2.91002 3.34 2.39002 3.84 2.15002L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.50002L20.16 10.81ZM6.05 2.66002L16.81 8.88002L14.54 11.15L6.05 2.66002Z"></path>
            </svg>
          </span>
          Play Store
        </a>
      </div>
    </div>
    </motion.div>
          </div>
    </div>
    <div className='w-full md:w-1/1 lg:w-1/2 px-4'>
    <motion.div
          initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
    <div className="font-bold text-2xl text-center">
  {/* Light mode image */}
  <img
    src={`${process.env.PUBLIC_URL}/app-image-2 (3).webp`}
    alt="app"
    className="block dark:hidden mx-auto"
  />

  {/* Dark mode image */}
  <img
      src={`${process.env.PUBLIC_URL}/app-image.webp`}
    alt="app"
    className="hidden dark:block mx-auto"
  />
</div>
</motion.div>

    </div>
    </div>
    </div>
    </>
  )
}
