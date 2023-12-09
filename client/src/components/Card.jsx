import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data , reference }) => {
  return (
    <motion.div dragTransition={{bounceDamping:195 , bounceStiffness:95}} drag dragConstraints={reference} className="relative overflow-hidden w-60 h-72 rounded-[21px] bg-zinc-900/90 p-3 text-white">
      <FaFileAlt />
      <p className="mt-5 text-ml font-semibold">{data.title} </p>
      <div className="p-3 footer absolute left-0 bottom-0 w-full py-4">
        <div className="flex items-center justify-between mb-8 text-zinc-850">
          <h5>{data.fileSize}</h5>
          {data.close ? (
            <IoCloseSharp size="1.2em" />
          ) : (
            <FaDownload size="1.2em" />
          )}
        </div>
        {data.tag.isOpen ? (
          <div
            className={`p-1 text-center footer absolute left-0 bottom-0 w-full py-2 ${
              data.tag.tagColor === "green" ? ("bg-green-400") : ("bg-sky-400")
            }`}
          >
            Download Now.
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
