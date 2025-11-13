import React from 'react'
import Chart from "react-apexcharts";
import { motion } from 'framer-motion';
export default function Features(props) {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["series-1", "series-2", "series-3", "series-4"],
    colors: [
      "rgba(35,71,185,1)",
      "rgba(51,99,255,1)",
      "rgba(139,166,255,1)",
      "rgba(134,150,202,1)"
    ],
    legend: {
      position: "bottom",
      labels: { colors: "#64748b" },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontWeight: "600",
        colors: ["#ffffff "],
      },
    },
    stroke: {
      width: 0,
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: { width: 280 },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  const series = [73, 55, 38, 20];

  return (
    <>
    <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
            transition={{ duration: 1, ease: "easeOut" }}
          >
      <div className="animate__animated animate__fadeInUp mx-auto max-w-[590px] text-center pb-16 pt-[120px]"
        data-wow-delay="0s">
        <span className="mb-3 text-lg font-bold uppercase text-[#3E7DFF] sm:text-xl">
          CRYPTO FEATURE
        </span>
        <h2 className={`mb-3 text-3xl font-bold leading-tight text-black md:text-[45px] ${props.mode === "dark"
          ? "text-white "
          : "text-dark"}`}>
          Best Features
        </h2>
        <p className={`text-lg font-medium text-[#637381] ${props.mode === "dark"
          ? "text-[#b5b3bc] "
          : "text-dark"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, in et dignissim quam condimentum vel.
        </p>
      </div>
</motion.div>

      <div className="mx-4 flex flex-wrap">
        <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
        <div className='mx-4 flex flex-wrap'>
        {[
          {
            title: "Safe & Secure",
            desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
            icon: (
              <svg height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 1.66675L5 8.33341V18.3334C5 27.5834 11.4 36.2334 20 38.3334C28.6 36.2334 35 27.5834 35 18.3334V8.33341L20 1.66675ZM20 19.9834H31.6667C30.7833 26.8501 26.2 32.9667 20 34.8834V20.0001H8.33333V10.5001L20 5.31675V19.9834Z" fill="white" /></svg>
            ),
          },
          {
            title: "Early Bonus",
            desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
            icon: (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3333 9.99992H29.6999C29.8833 9.48325 29.9999 8.91658 29.9999 8.33325C29.9999 5.56659 27.7666 3.33325 24.9999 3.33325C23.2499 3.33325 21.7333 4.23325 20.8333 5.58325L19.9999 6.69992L19.1666 5.56659C18.2666 4.23325 16.7499 3.33325 14.9999 3.33325C12.2333 3.33325 9.99992 5.56659 9.99992 8.33325C9.99992 8.91658 10.1166 9.48325 10.2999 9.99992H6.66659C4.81659 9.99992 3.34992 11.4833 3.34992 13.3333L3.33325 31.6666C3.33325 33.5166 4.81659 34.9999 6.66659 34.9999H33.3333C35.1833 34.9999 36.6666 33.5166 36.6666 31.6666V13.3333C36.6666 11.4833 35.1833 9.99992 33.3333 9.99992ZM24.9999 6.66659C25.9166 6.66659 26.6666 7.41658 26.6666 8.33325C26.6666 9.24992 25.9166 9.99992 24.9999 9.99992C24.0833 9.99992 23.3333 9.24992 23.3333 8.33325C23.3333 7.41658 24.0833 6.66659 24.9999 6.66659ZM14.9999 6.66659C15.9166 6.66659 16.6666 7.41658 16.6666 8.33325C16.6666 9.24992 15.9166 9.99992 14.9999 9.99992C14.0833 9.99992 13.3333 9.24992 13.3333 8.33325C13.3333 7.41658 14.0833 6.66659 14.9999 6.66659ZM33.3333 31.6666H6.66659V28.3333H33.3333V31.6666ZM33.3333 23.3333H6.66659V13.3333H15.1333L11.6666 18.0499L14.3666 19.9999L18.3333 14.5999L19.9999 12.3333L21.6666 14.5999L25.6333 19.9999L28.3333 18.0499L24.8666 13.3333H33.3333V23.3333Z"
                  fill="white"
                />
              </svg>
            ),
          },
          {
            title: "Universal Access",
            desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
            icon: (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33325L10.8334 18.3333H29.1667L20 3.33325Z" fill="white" />
                <path
                  d="M29.1666 36.6667C33.3088 36.6667 36.6666 33.3089 36.6666 29.1667C36.6666 25.0246 33.3088 21.6667 29.1666 21.6667C25.0245 21.6667 21.6666 25.0246 21.6666 29.1667C21.6666 33.3089 25.0245 36.6667 29.1666 36.6667Z"
                  fill="white"
                />
                <path d="M5 22.5H18.3333V35.8333H5V22.5Z" fill="white" />
              </svg>
            ),
          },
          {
            title: "Secure Storage",
            desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24.9999H18.3333V21.6666H5V24.9999ZM5 31.6666H18.3333V28.3333H5V31.6666ZM5 18.3333H18.3333V14.9999H5V18.3333ZM5 8.33325V11.6666H18.3333V8.33325H5ZM21.6667 8.33325H35V31.6666H21.6667V8.33325Z" fill="white"></path></svg>
            ),
          },
          {
            title: "Low Cost",
            desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 30V31.6667C35 33.5 33.5 35 31.6667 35H8.33333C6.48333 35 5 33.5 5 31.6667V8.33333C5 6.5 6.48333 5 8.33333 5H31.6667C33.5 5 35 6.5 35 8.33333V10H20C18.15 10 16.6667 11.5 16.6667 13.3333V26.6667C16.6667 28.5 18.15 30 20 30H35ZM20 26.6667H36.6667V13.3333H20V26.6667ZM26.6667 22.5C25.2833 22.5 24.1667 21.3833 24.1667 20C24.1667 18.6167 25.2833 17.5 26.6667 17.5C28.05 17.5 29.1667 18.6167 29.1667 20C29.1667 21.3833 28.05 22.5 26.6667 22.5Z" fill="white"></path></svg>
            ),
          },
          {
            title: "Several Profit",
            desc: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 13.3333C16.3167 13.3333 13.3333 16.3167 13.3333 20C13.3333 23.6833 16.3167 26.6667 20 26.6667C23.6833 26.6667 26.6667 23.6833 26.6667 20C26.6667 16.3167 23.6833 13.3333 20 13.3333ZM8.33333 25H5V31.6667C5 33.5 6.5 35 8.33333 35H15V31.6667H8.33333V25ZM8.33333 8.33333H15V5H8.33333C6.5 5 5 6.5 5 8.33333V15H8.33333V8.33333ZM31.6667 5H25V8.33333H31.6667V15H35V8.33333C35 6.5 33.5 5 31.6667 5ZM31.6667 31.6667H25V35H31.6667C33.5 35 35 33.5 35 31.6667V25H31.6667V31.6667Z" fill="white"></path></svg>
            ),
          },
        ].map((feature, index) => (
          <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3 pb-[80px]">
            <div
              className="animate-fadeInUp mx-auto mb-14 max-w-[370px] text-center"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="font-inter mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#3E7DFF] ">
                {feature.icon}
              </div>
              <div>
                <h3 className={`font-inter mb-3 text-xl font-bold sm:text-3xl lg:text-xl xl:text-3xl ${props.mode === "dark"
                  ? "text-white "
                  : "text-dark"}`}>
                  {feature.title}
                </h3>
                <p className={`font-inter text-base font-medium sm:text-lg lg:text-base xl:text-[19px]  ${props.mode === "dark"
                  ? "text-[#b5b3bc] "
                  : "text-[#637381]"}`}>
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
        </motion.div>

        <section className="relative z-10 px-6">
          <div className="container mx-auto">
            <div className={`rounded-lg px-8 py-12  sm:px-14 sm:py-16 lg:px-8 xl:px-14 ${props.mode === "dark"
              ? "bg-[#14102C] "
              : "bg-[#f5f8ff]"}`}>
              <div className="-mx-4 flex flex-wrap items-center">
                {/* Left Chart Section */}
                <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
                <div className="w-full px-4 lg:w-1/2 ">
                  <div className="mx-auto mb-12 flex items-center justify-center sm:h-[390px] sm:w-[390px] lg:mb-0">
                    <div className="min-h-[349px]">
                      {/* Placeholder for ApexChart */}
                      <div className="h-[349px] w-[415px] rounded-lg flex items-center justify-center">
                        <div className="flex justify-center items-center p-6 rounded-2xl">
                          <div className="w-[450px]">
                            <Chart options={options} series={series} type="donut" width="100%" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>

                {/* Right Text Section */}
                <div className="w-full px-4 lg:w-1/2">
                  {/* Title and Description */}
                  <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
                  <div className="animate-fadeInUp mb-9">
                    <span className="mb-3 block text-lg font-bold uppercase text-[#3E7DFF] sm:text-xl">
                      TOKEN
                    </span>
                    <h2 className={`mb-3 text-3xl font-bold leading-tight text-black md:text-[45px] ${props.mode === "dark"
                      ? "text-white "
                      : "text-dark"}`}>
                      Token Sale
                    </h2>
                    <p className={`text-lg font-medium ${props.mode === "dark"
                      ? "text-[#b5b3bc]"
                      : "text-[#637381  ]"}`}>
                      Lorem ipsum   dolor sit amet, consectetur adipiscing elit.
                      Phasellus condimentum tellus at lectus pulvinar, id auctor
                      felis iaculis. In vestibulum neque sem, at dapibus justo
                      facilisis in.
                    </p>
                  </div>
                 </motion.div>

                  {/* Stats List */}
                 <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
                  <div className="animate-fadeInUp space-y-4">
                    <p className="flex items-center">
                      <span className="mr-4 h-6 w-6 rounded-full bg-[#3e7dff]"></span>
                      <span className={`text-lg font-medium ${props.mode === "dark"
                        ? "text-[#b5b3bc]"
                        : "text-[#637381]"}`}>
                        73% Financial Overhead
                      </span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                      <span className={`text-lg font-medium ${props.mode === "dark"
                        ? "text-[#b5b3bc]"
                        : "text-[#637381]"} `}>
                        55% Bonus &amp; Found
                      </span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                      <span className={`text-lg font-medium ${props.mode === "dark"
                        ? "text-[#b5b3bc]"
                        : "text-[#637381]"}`}>
                        38% IT Infrastructure
                      </span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                      <span className={`text-lg font-medium ${props.mode === "dark"
                        ? "text-[#b5b3bc]"
                        : "text-[#637381]"}`}>
                        20.93% Gift Code Inventory
                      </span>
                    </p>
                  </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-32 right-0 -z-10">
            <img
              src={`${process.env.PUBLIC_URL}/token-sale-shape.svg`}
              alt="shape"
              width={311}
              height={768}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </section>
      </div>
    </>
  );
};