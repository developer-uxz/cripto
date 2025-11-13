import React from 'react'
import { motion } from 'framer-motion';
export default function BlogCard(props) {
  return (
    <div>
       <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:   true }} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <div className='pt-[120px] pb-20'>
        <h4 className='pb-2 text-xl text-center font-bold text-[#3e7dff]'>LATEST NEWS</h4>
        <h2 className={`text-5xl text-center font-bold pb-4 ${ props.mode === "dark"
        ? "text-white" 
        : "text-dark"}`}>Recent News & Blogs</h2>
        <p className={`font-medium max-w-[630px] text-lg text-center mx-auto text- ${ props.mode === "dark"
        ? "text-[#b5b3bc]" 
        : "text-[#637381]"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, in et dignissim quam condimentum vel.
        </p>
      </div>
</motion.div>


     {/* <article className="wow fadeInUp bg-light-bg text-body-color-2 dark:text-body-color relative flex flex-col overflow-hidden rounded-lg dark:bg-[#14102C]">
      <div className="relative h-[200px] overflow-hidden xl:h-[242px]">
        <img
          alt="blog"
          loading="lazy"
          decoding="async"
          className="w-full object-cover object-center"
          src="https://cdn.sanity.io/images/d33zuypx/production/a0ca7f2ce7b15da5c3c4bb79e6856ab013fce446-970x430.jpg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start p-7 lg:px-6 xl:p-8">
        <dl className="mb-2 flex flex-wrap items-center gap-3">
          <dd>
            <a className="relative z-10 flex items-center gap-3" href="#">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="currentColor"
                className="text-dark dark:text-white"
              >
                <path d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z"></path>
              </svg>
              <span className="capitalize">Juhan Ahamed</span>
            </a>
          </dd>
          <dd className="flex items-center gap-3">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="currentColor"
              className="text-dark dark:text-white"
            >
              <path d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z"></path>
            </svg>
            <time>Aug 21 2024</time>
          </dd>
        </dl>
        <div className="group mb-8">
          <h3>
            <a
              className="text-dark group-hover:!text-primary mb-4 line-clamp-2 text-xl font-bold sm:text-2xl lg:text-lg xl:text-2xl dark:text-white"
              href="#"
            >
              Laboris nisi aliquip dium exiuliym commo cons.
            </a>
          </h3>
          <p className="text-body-color-2 dark:text-body-color line-clamp-3 text-base leading-loose font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            congue arcu, In et dignissim quam condime vel.
          </p>
        </div>
        <a
          className="bg-primary hover:bg-primary/90 relative mt-auto inline-flex rounded-full px-8 py-3 text-center text-base font-semibold text-white dark:bg-white dark:text-black dark:hover:bg-white/90"
          href="#"
        >
          Read More
        </a>
      </div>
    </article> */}
    </div>
  )
}
