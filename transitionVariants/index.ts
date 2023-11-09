import { Variants } from "framer-motion";

const d = 0.2;

export const variants1: Variants = {
  out: {
    opacity: 0,
    y: 80,
    transition: {
      duration: d,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: d,
      delay: 0.2,
    },
  },
};

export const variants2: Variants = {
  out: {
    opacity: 0,
    x: -390,
    transition: {
      duration: d,
    },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: d,
      delay: 0.2,
    },
  },
};
