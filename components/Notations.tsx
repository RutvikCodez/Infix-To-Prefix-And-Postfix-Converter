import React from "react";
import { data as notationData } from "@/utils/notationData";

const Notations = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold max-md:text-2xl">Understanding Notations</h2>
      <p className="text-lg max-md:text-base">
        Learn about the different types pf mathemetical notations and how they
        work.
      </p>
      <div className="flex flex-col gap-6">
        {notationData.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl max-md:text-xl">{item.title}</h3>
            <p className="text-justify text-lg max-md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notations;
