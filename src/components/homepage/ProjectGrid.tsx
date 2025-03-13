"use client";

import Image from "next/image";
import ProjectGridItem from "./ProjectGridItem";

const gridItems = [
  {
    title: "Quotagram",
    tagLine:
      "A social media project that is a Twitter clone specifically for quotes.",
    image: "/project/quotagram_homepage.png",
    imageWidth: 1918,
    imageHeight: 919,
    url: "/project/quotagram",
    columnSpan: 2,
  },
  {
    title: "VR Escape Room",
    tagLine: "",
    image: "/project/vr_room.png",
    imageWidth: 1496,
    imageHeight: 883,
    url: "",
    columnSpan: 1,
  },
  {
    title: "Motion Planning Zoo",
    tagLine: "",
    image: "/project/motion_island.png",
    imageWidth: 1822,
    imageHeight: 958,
    url: "",
    columnSpan: 1,
  },
  {
    title: "Freelance Web Development",
    tagLine: "",
    image: "/project/mary-bleckwehl.jpg",
    imageWidth: 512,
    imageHeight: 512,
    url: "",
    columnSpan: 1,
  },
  {
    title: "Ludum Dare Submissions",
    tagLine: "",
    image: "/project/ludum-dare-temp.jpg",
    imageWidth: 512,
    imageHeight: 512,
    url: "",
    columnSpan: 1,
  },
];

const ProjectGrid = () => {
  return (
    <div className="fixed-grid has-3-cols">
      <div className="grid">
        {gridItems.map((item) => (
          <ProjectGridItem
            key={item.title}
            title={item.title}
            tagLine={item.tagLine}
            image={
              <Image
                src={item.image}
                alt="Alt Image"
                width={item.imageWidth}
                height={item.imageHeight}
              />
            }
            url={item.url}
            columnSpan={item.columnSpan}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
