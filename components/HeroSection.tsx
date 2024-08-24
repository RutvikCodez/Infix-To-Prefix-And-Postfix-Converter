import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[80vh] flex flex-col gap-5 justify-center items-center bg-black text-white max-md:px-5">
      <h1 className="font-bold text-6xl max-lg:text-4xl max-md:text-xl">
        Convert Infix to Prefix and Postfix
      </h1>
      <p className="text-lg max-md:text-sm max-md:text-center">
        Easily convert your mathe,etical expressions between different
        notations.
      </p>
      <button className="bg-white rounded text-black py-3 px-5">
        Try it Now
      </button>
    </section>
  );
};

export default HeroSection;
