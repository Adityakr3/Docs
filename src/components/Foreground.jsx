import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion"

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      title: "Lorem ipsum adipisicing elit. Placeat  iste quisquam!",
      fileSize: ".5mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      title: "Lorem ipsum adipisicing elit. Placeat  iste quisquam!",
      fileSize: ".5mb",
      close: true,
      tag: {
        isOpen:true,
        tagTitle: "Download Now",
        tagColor: "sky",
      },
    },
    {
      title: "Lorem ipsum adipisicing elit. Placeat  iste quisquam!",
      fileSize: ".5mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-5">
      {data?.map((item, idx) => (
        <Card data={item} reference = {ref} />
      ))}
    </div>
  );
};

export default Foreground;
