import React, { useState } from "react";
import { motion } from "framer-motion";

const OurVision: React.FC = () => {
    return (
        <div className="md:grid lg:grid-cols-2 md:mx-40 lg:mt-64 mt-32 flex flex-col text-center lg:text-left sm:mb-32">
            <div className="bg-skin-main lg:rounded-l-3xl md:rounded-t-3xl lg:rounded-tr-none py-20 transition-all duration-500 relative">
                <div className="xl:px-24 md:px-10 flex flex-col items-center w-11/12 mx-auto my-auto">
                    <motion.div
                        className="container flex flex-col justify-center h-[250px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "fade",
                            duration: 0.5,
                        }}
                    >
                        <h2 className="font-semibold text-4xl text-white ease-in-out transition-all duration-1000">
                            Our Vision
                        </h2>
                        <p className="text-gray-200 mt-8">
                            Internet is flooded with so many resources that can make one confused and clueless. So we provide the best, filtered, and curated resources like YouTube videos, GitHub repositories, websites, cheatsheets, etc!
                        </p>
                        <img src="/our-vision-image.png" alt="" className="w-32 absolute right-5 -bottom-[56px] md:hidden z-20" />
                    </motion.div>
                </div>
            </div>
            <div className="md:bg-[#F2F2F2] lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none pt-20 pb-10 relative border-2 border-dashed border-black border-opacity-30 border-l-0">
                <div className="flex flex-col justify-center h-full">
                    <img src="/our-vision-image.png" alt="" className="mx-auto w-96" />
                </div>
            </div>
        </div>
    );
};

export default OurVision;
