"use client";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedChristmasTreeSwitch = ({
  play,
  setPlay,
}: {
  play: boolean;
  setPlay: (play: boolean) => void;
}) => {
  return (
    <div className="w-full">
      <AnimatePresence mode="wait" initial={false}>
        {play && (
          <motion.svg
            className="cursor-pointer"
            key="on"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.1 }}
            transition={{ duration: 0.1 }}
            fill="none"
            viewBox="-20 0 190 190"
            onClick={() => setPlay(false)}
          >
            <path
              fill="#f3f6f4"
              fillRule="evenodd"
              d="m91.597 148.515-38.549-.789s-.436-71.987-.433-74.955c.004-5.723 1.57-10.257 6.978-10.257 8.543 0 23.172.79 32.004.79 5.248 0 6.887 2.744 6.978 7.89.214 12.044 0 33.138 0 33.138s3.34 21.989 4.651 27.615c1.32 5.662-.91 6.307-3.101 8.679-3.927 4.249-8.528 7.889-8.528 7.889Zm0-42.605.775-35.293-32.562-.79.216 37.66 3.876 26.037 32.348.79-4.653-28.404Zm-14.288 3.972c13.833 0 16.265 19.621 2.755 19.621-14.792 0-16.64-19.621-2.755-19.621Zm1.837 14.083c5.88 0 4.822-8.54-1.199-8.54-6.045 0-5.24 8.54 1.199 8.54Zm-6.514-29.91-.259-17.01 7.766.171L79.9 94.29l-7.268-.234Z"
              clipRule="evenodd"
            />
          </motion.svg>
        )}
        {!play && (
          <motion.svg
            key="off"
            className="cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.1 }}
            transition={{ duration: 0.1 }}
            fill="none"
            viewBox="-20 0 190 190"
            onClick={() => setPlay(true)}
          >
            <path
              fill="#f3f6f4"
              fillRule="evenodd"
              d="M103.226 79.083c-1.312 5.625-4.651 29.873-4.651 29.873s.213 18.835 0 30.879c-.092 5.146-1.729 7.89-6.978 7.89-8.833 0-23.46.79-32.004.79-5.408 0-6.974-4.534-6.977-10.257-.002-2.967.432-74.954.432-74.954l38.549-.79s4.602 3.64 8.528 7.89c2.19 2.372 4.421 3.018 3.101 8.68Zm-25.488 59.061c14.17 0 14.081-21.497.242-21.497-15.152 0-14.466 21.497-.242 21.497Zm6.697-52.523-7.016-.516-2.41 15.49h6.499l2.927-14.974Zm4.869-17.315L59 69.287l-.196 38.446 1.36.144 2.712-30.94 34.627-.63-8.199-8Zm-11.508 53.571c7.103 0 7.148 11.032-.125 11.032-7.299 0-7.651-11.032.125-11.032Z"
              clipRule="evenodd"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AnimatedChristmasTreeSwitch;
