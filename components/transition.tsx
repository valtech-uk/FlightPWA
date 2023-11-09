import { AnimatePresence } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <div className="effect-1">
      <AnimatePresence initial={false}>{children}</AnimatePresence>
    </div>
  );
};

export default Transition;
