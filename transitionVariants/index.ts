import { Variants } from "framer-motion";

export const variants1: Variants = {
  out: {
    opacity: 0,
    y: 80,
    transition: {
      duration: 0.3,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};
