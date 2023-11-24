import { motion } from "framer-motion";
import Modal from "react-modal";
export const CelebrateModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalVariants = {
    hidden: {
      opacity: 0,

      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="font-jost flex h-full items-center justify-center border-none outline-none backdrop:blur-xl"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
        },
        content: {},
      }}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{
          type: "spring",
          delay: 0.3,
          stiffness: 50,
          ease: "easeInOut",
          duration: 0.3,
        }}
        className="animate-in relative flex w-11/12 flex-col  justify-center rounded-md border border-stone-900 bg-gradient-to-tr from-stone-800/30 to-stone-950/50 px-8 pb-4 pt-4 dark:from-black dark:to-stone-900/20 md:w-3/12"
      >
        <h2 className="text-xl text-center text-white">
          Congratulation, you have finished your task!
        </h2>
        <div
          role="button"
          className="flex items-center justify-center pt-6"
          onClick={onClose}
        >
          <button className=" bg-stone-100 py-2 px-4 text-stone-800 rounded-md w-max hover:opacity-70 shadow-sm shadow-stone-500 transition-all duration-300 ease-in-out">
            👊🏽 Close
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};
