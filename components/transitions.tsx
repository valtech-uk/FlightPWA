import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
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

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        {/* <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div> */}
        {children}
      </AnimatePresence>
    </div>
  );
};

export default Transition;
