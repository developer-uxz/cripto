import React from 'react'
import { motion } from 'framer-motion';
export default function Support(props) {
    return (
        <div className={`pt-[120px] ${props.mode === "dark"
            ? "bg-[#14102C]"
            : "bg-[#F5F8FF]"}`}>
            <div className='container mx-8'>
                <div className='flex flex-wrap'>
                    <div className='w-7/12'>
                        <div className='pt-[90px]' >
                             <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mx-auto max-w-[740px] mb-4"
      >
                            <div className="mb-16 max-w-[350px]" data-wow-delay="0s">
                                <span className="text-[#3e7dff] mb-3 text-lg font-bold uppercase sm:text-xl">Contact Us</span>
                                <h2 className={`mb-3 text-3xl leading-tight font-bold md:text-[45px] ${props.mode === "dark"
                                    ? "text-white"
                                    : "text-dark"}`}>Let's talk about your problem.</h2>
                            </div>
                            </motion.div>
                             <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
      >
                            <div className="-mx-4 flex flex-wrap">
                                {/* Location */}
                                
                                <div className="w-full px-4 sm:w-1/2">
                                    <div className="mb-11 max-w-[250px]" data-wow-delay="0s">
                                        <h3 className={`mb-4 text-lg font-semibold ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}>
                                            Our Location
                                        </h3>
                                        <p className={`text-base leading-loose font-medium ${props.mode === "dark"
                                            ? "text-[#b5b3bc]"
                                            : "text-[#637381]"}`}>
                                            401 Broadway, 24th Floor, Orchard Cloud View, London
                                        </p>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="w-full px-4 sm:w-1/2">
                                    <div className="mb-11 max-w-[250px]" data-wow-delay="0s">
                                        <h3 className={`mb-4 text-lg font-semibold ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}>
                                            Email Address
                                        </h3>
                                        <p className={`text-base leading-loose font-medium ${props.mode === "dark"
                                            ? "text-[#b5b3bc]"
                                            : "text-[#637381]"}`}>
                                            info@yourdomain.com
                                        </p>
                                        <p className={`text-base leading-loose font-medium ${props.mode === "dark"
                                            ? "text-[#b5b3bc]"
                                            : "text-[#637381]"}`}>
                                            contact@yourdomain.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="w-full px-4 sm:w-1/2">
                                    <div className="mb-11 max-w-[250px]" data-wow-delay="0s">
                                        <h3 className={`mb-4 text-lg font-semibold ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}>
                                            Phone Number
                                        </h3>
                                        <p className={`text-base leading-loose font-medium ${props.mode === "dark"
                                            ? "text-[#b5b3bc]"
                                            : "text-[#637381]"}`}>
                                            +990 846 73644
                                        </p>
                                        <p className={`text-base leading-loose font-medium ${props.mode === "dark"
                                            ? "text-[#b5b3bc]"
                                            : "text-[#637381]"}`}>
                                            +550 9475 4543
                                        </p>
                                    </div>
                                </div>

                                {/* Help Section */}
                                <div className="w-full px-4 sm:w-1/2">
                                    <div className="mb-11 max-w-[250px]" data-wow-delay="0s">
                                        <h3 className={`mb-4 text-lg font-semibold ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}>
                                            How Can We Help?
                                        </h3>
                                        <p className={`text-base leading-loose font-medium ${props.mode === "dark"
                                            ? "text-[#b5b3bc]"
                                            : "text-[#637381]"}`}>
                                            Tell us your problem we will get back to you ASAP.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-5/12'>
                        <div className={`rounded-md px-8 py-12 data-wow-delay="0s" ${props.mode === "dark"
                                            ? "bg-[#121A4C]"
                                            : "bg-white"}`}>
                                                 <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
      >
                            <h3 className={`mb-8 text-2xl font-bold sm:text-[34px] lg:text-2xl xl:text-[34px] ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}>
                                Send us a Message
                            </h3>
                            </motion.div>
                             <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
       
      >

                            <form>
                                {/* Full Name */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="name"
                                        className={`mb-2 block text-sm font-medium ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}
                                    >
                                        Full Name*
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="text-[#b5b3bc] focus:border-[#3e7dff] w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-none"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className={`text-dark mb-2 block text-sm font-medium ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}
                                    >
                                        Email Address*
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="text-[#b5b3bc] focus:border-[#3e7dff] w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-none"
                                    />
                                </div>

                                {/* Message */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="message"
                                        className={`text-dark mb-2 block text-sm font-medium ${props.mode === "dark"
                                            ? "text-white"
                                            : "text-dark"}`}
                                    >
                                        Message*
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Type your message"
                                        className="text-[#b5b3bc] focus:border-[#3e7dff] w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className={`cursor-pointer w-full rounded-full p-3 text-center text-base font-semibold ${props.mode === "dark"
                                            ? "hover:bg-white/90"
                                            : "hover:bg-[#3e7dff]/90"} 
                                            ${props.mode === "dark"
                                            ? "bg-white"
                                            : "bg-[#3e7dff]"}
                                             ${props.mode === "dark"
                                            ? "text-black"
                                            : "text-white"}`}
                                >
                                    Send Message
                                </button>
                            </form>
                            </motion.div>
                        </div>
                    </div>

                </div>

            </div>




            <section id="newsletter" className="relative z-10 mt-[120px]">
                {/* Background top bar */}
                <div className="bg-[#131B4D] absolute top-0 left-0 -z-10 h-[220px] w-full container mx-8 rounded"></div>
 <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
      >
                <div className="container mx-auto px-4">
                    <div
                        className="bg-dark relative z-10 overflow-hidden rounded-sm p-8 sm:p-12"
                        data-wow-delay="0s"
                    >
                        <div className="-mx-4 flex flex-wrap items-center">
                            {/* Left Side */}
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="mb-10 lg:mb-0">
                                    <div className="max-w-[500px]">
                                        <h2 className="mb-2 text-3xl font-bold leading-tight text-white md:text-[45px]">
                                            Newsletter
                                        </h2>
                                        <p className="text-lg font-medium text-white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                            vitae quam nec ante aliquet fringilla vel at erat.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="w-full px-3 lg:w-1/2">
                                <div>
                                    <form className="relative">
                                        <input
                                            type="email"
                                            placeholder="Enter email address"
                                            className="text-[#637381]  w-full rounded-full border border-transparent bg-white px-10 py-5 text-base font-medium outline-none sm:pr-24"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-[#3e7dff] hover:bg-[#3e7dff]/90 top-1/2 right-2.5 mt-5 inline-flex h-12 items-center rounded-full px-7 text-base font-medium text-white sm:absolute sm:mt-0 sm:-translate-y-1/2"
                                        >
                                            Submit
                                            <span className="pl-1">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >   
                                                    <path
                                                        d="M1.67496 17.5L19.1666 10L1.67496 2.5L1.66663 8.33333L14.1666 10L1.66663 11.6667L1.67496 17.5Z"
                                                        fill="white"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Shape Image */}
                        <div className="absolute top-0 right-0 -z-10">
                            <img
                                 src={`${process.env.PUBLIC_URL}/newsletter-shape.svg`}
                                alt="shape"
                                width="501"
                                height="220"
                                loading="lazy"
                                decoding="async"
                                style={{ color: "transparen t" }}
                            />
                        </div>
                    </div>
                </div>
                </motion.div>
            </section>
        </div>
    )
}
