import React, { useRef } from "react";
import Card from "./Card";
import { Nav } from "./Nav";

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
        isOpen: true,
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
    <div
      className="fixed top-0 left-0 z-[3] w-full h-screen flex flex-col"
    >
      <Nav />
      <div ref={ref} className="p-3 flex-shrink-0 flex gap-5 w-full h-[90vh]">
        {data?.map((item, idx) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
