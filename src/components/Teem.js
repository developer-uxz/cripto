import React from 'react'
import { motion } from 'framer-motion';
const teamMembers = [
  {
    name: "Matheus Ferrero",
    role: "Marketing Expert",
    image:`${process.env.PUBLIC_URL}/image-01.webp`,
  },
  {
    name: "Eva Hudson",
    role: "Blockchain Developer",
    image: `${process.env.PUBLIC_URL}/image-02.webp`,
  },
  {
    name: "Jackie Sanders",
    role: "Creative Designer",
    image: `${process.env.PUBLIC_URL}/image-03.webp`,
  },
  {
    name: "Liam Turner",
    role: "UI/UX Specialist",
    image:`${process.env.PUBLIC_URL}/image-04.webp`,
  },
];
export default function Team(props) {
  return (
    <div>
      <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
      <div className={`pt-[120px] border-t pb-20 ${ props.mode === "dark"
        ? "border-[#2D2C4A] " 
        : "border-[#F3F4F4]"}`}>
        <h4 className='pb-2 text-xl text-center font-bold text-[#3e7dff]'>OUR TEAM</h4>
        <h2 className={`text-5xl text-center font-bold pb-4 ${ props.mode === "dark"
        ? "text-white " 
        : "text-black"}`}>Meet our Team</h2>
        <p className={`font-medium max-w-[590px] text-lg text-center mx-auto ${ props.mode === "dark"
        ? "text-[#b5b3bc] " 
        : "text-[#637381]"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, in et dignissim quam condimentum vel.
        </p>
      </div>
          </motion.div>
    <section className=" pt-2 pb-16">
      <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}} // scroll ke hisaab se trigger, repeatable
        transition={{ duration: 1, ease: "easeOut" }} 
      >
      <div className="container mx-auto ">
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-10"
            >
              <div className={`rounded-lg border-b-4 border-transparent hover:border-blue-600 transition-all text-center p-5 ${ props.mode === "dark"
        ? "bg-[#080321] " 
        : "bg-[#F5F8FF]"}`}>
                <div className="mb-6 overflow-hidden rounded-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full rounded-md"
                  />
                </div>
                <h3 className={`text-lg font-semibold ${ props.mode === "dark"
        ? "text-white" 
        : "text-gray-900"}`}>
                  {member.name}
                </h3>
                <p className={`text-sm mb-4 ${ props.mode === "dark"
        ? "text-[#b5b3bc]" 
        : "text-[#637381]"}`}>
                  {member.role}
                </p>
                <div className={`flex justify-center space-x-4 ${ props.mode === "dark"
        ? "text-white" 
        : "text-gray-400"}`}>
                  <a href="#" className="hover:text-blue-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube text-[#B6BFC9] hover:text-blue-400"></i>

                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>



    </div>
  );
}
