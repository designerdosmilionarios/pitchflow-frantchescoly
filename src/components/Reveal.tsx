"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "span" | "h1" | "h2" | "h3" | "p" | "li" | "ul";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 32,
  duration = 1,
  className,
  once = true,
  as = "div",
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as any;

  const variants: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : y, filter: reduce ? "none" : "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.01 : duration,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.12, margin: "0px 0px -30px 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  delayChildren = 0.08,
  staggerChildren = 0.12,
  className,
}) => {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : staggerChildren,
        delayChildren: reduce ? 0 : delayChildren,
      },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  y?: number;
}> = ({ children, className, y = 22 }) => {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : y, filter: reduce ? "none" : "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduce ? 0.01 : 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
};
