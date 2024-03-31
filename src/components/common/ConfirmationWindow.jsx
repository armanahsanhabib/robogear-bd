/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const ConfirmationWindow = (props) => {
  return (
    <AnimatePresence>
      {props.logoutConfirmation && (
        <div className="fixed h-screen w-screen left-0 top-0 bg-[#00000080] flex items-center z-50 justify-center">
          <div className="container px-5 mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} // Initial animation properties
              animate={{ opacity: 1, scale: 1 }} // Animation properties
              // exit={{ opacity: 0, scale: 0.3 }} // Exit animation properties
              transition={{ duration: 0.3 }} // Animation duration
              className="relative overflow-hidden max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
            >
              <h1 className="text-2xl font-bold text-center mb-5">
                Do you want really sign out?
              </h1>
              <div className="buttons w-full flex justify-center items-center gap-5">
                <button
                  type="button"
                  className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => props.setLogOutConfirmation(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-5 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white"
                  onClick={() => props.logout()}
                >
                  Confirm
                </button>
              </div>
              <button
                className="absolute top-0 right-0 p-3 text-3xl hover:rotate-90 transition-all text-rose-600"
                onClick={() => props.setLogOutConfirmation(false)}
              >
                <IoMdClose />
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationWindow;
