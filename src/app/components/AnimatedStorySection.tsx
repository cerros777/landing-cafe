"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

interface AnimatedStorySectionProps {
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  details?: string;
  imageSrc: string;
  imageAlt: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, rotate: -3 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, bounce: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, bounce: 0.25 },
  },
};

const AnimatedStorySection: React.FC<AnimatedStorySectionProps> = ({
  title,
  subtitle,
  description,
  details,
  imageSrc,
  imageAlt,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col md:flex-row items-center justify-center gap-24 py-32 px-4 max-w-6xl mx-auto"
      id="story"
    >
      <div className="flex-1 flex flex-col items-center md:items-start gap-6">
        <motion.h2
          className="font-sans text-4xl md:text-5xl font-bold mb-2 text-bone relative"
          variants={itemVariants}
        >
          {title}
          <span className="block w-16 h-1 bg-bronze mt-2 rounded-full" />
        </motion.h2>
        {subtitle && (
          <motion.p variants={itemVariants} className="text-xl text-ash mb-2">
            {subtitle}
          </motion.p>
        )}
        <motion.p variants={itemVariants} className="text-lg text-bone/80 max-w-md mb-2">
          {description}
        </motion.p>
        {details && (
          <motion.p variants={itemVariants} className="text-lg text-bone/80 max-w-md mb-2">
            {details}
          </motion.p>
        )}
      </div>
      <motion.div
        className="flex-1 flex justify-center"
        variants={imageVariants}
      >
        <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-bronze bg-espresso/60 flex items-center justify-center backdrop-blur-md">
          <Image src={imageSrc} alt={imageAlt} width={500} height={500} className="object-cover w-full h-full" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AnimatedStorySection;
