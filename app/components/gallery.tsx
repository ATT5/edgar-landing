"use client";
import { useEffect, useState } from "react";
import { images1, images2 } from "../assets";
import { IGallery } from "./interfaces";
import Image from "next/image";

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<IGallery>();
  const [hover, sethover] = useState(false);
  const projectList: IGallery[] = [
    {
      title: "project1",
      description: "description1",
      image: images1,
      index: 0,
    },
    {
      title: "project2",
      description: "description2",
      image: images2,
      index: 1,
    },
    {
      title: "project3",
      description: "description3",
      image: images1,
      index: 2,
    },
    {
      title: "project4",
      description: "description4",
      image: images2,
      index: 3,
    },
    {
      title: "project5",
      description: "description5",
      image: images1,
      index: 4,
    },
    {
      title: "project6",
      description: "description6 lorem ipsum",
      image: images2,
      index: 5,
    },
  ];

  const getProject = (index: number) => {
    console.log("index", index);
    setSelectedProject(projectList[index]);
    sethover(true);
  };

  return (
    <div className="h-screen w-full bg-black flex">
      <div className="bg-white w-2/5 h-full flex justify-center items-center">
        {selectedProject && (
          <div className="flex flex-col items-center pr-7">
            <Image
              className="border-4 border-black w-[400px] h-[400px]"
              src={selectedProject.image}
              alt="1"
              width={500}
              height={500}
            />
            <h2 className="text-black">{selectedProject.title}</h2>
            <p className="text-black">{selectedProject.description}</p>
          </div>
        )}
      </div>
      <div className="bg-blue-200 w-3/5 h-full flex justify-center items-center p-11 cursor-pointer">
        <div
          className="w-full h-1/3 flex flex-col gap-10 justify-center "
          onMouseLeave={() => {
            sethover(false);
            setSelectedProject(undefined);
          }}
        >
          {projectList.map((item, index) => (
            <p
              key={index}
              onMouseEnter={() => getProject(index)}
              className={`sm:text-7xl font-bold  ${
                !hover || selectedProject?.index === index
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
