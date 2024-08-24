"use client";
import { infixToPostfix } from "@/utils/infixToPostfix";
import { infixToPrefix } from "@/utils/infixToPrefix";
import React, { useState } from "react";

const Converter = () => {
  const [expression, setexpression] = useState<string>("");
  const [prefix, setprefix] = useState<string>("");
  const [postfix, setpostfix] = useState<string>("");

  const onChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setexpression(e.target.value);
  };

  const onSubmit = () => {
    if (expression === "") {
      alert("Please enter expression");
    }
    let prefix = infixToPrefix(expression);
    let postfix = infixToPostfix(expression);
    setprefix(prefix);
    setpostfix(postfix);
  };

  const data = [
    {
      title: "Prefix",
      value: prefix,
    },
    {
      title: "Postfix",
      value: postfix,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold max-md:text-2xl">Convert Your Expression</h2>
      
      <p className="text-lg">
        Enter an Infix expression and see the prefix and postfix notations.
      </p>
      <input
        type="text"
        placeholder="Enter infix expression"
        className=" text-black border border-gray-200 p-2 rounded"
        value={expression}
        onChange={(e) => {
          onChnage(e);
        }}
      />
      <div className="grid grid-cols-2 gap-5">
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p className="p-2 border border-gray-200 w-full rounded">
              {item.value !== "" ? item.value : "NULL"}
            </p>
          </div>
        ))}
      </div>
      <button
        className="border py-2 px-6 bg-black text-white  w-fit rounded self-center"
        onClick={() => {
          onSubmit();
        }}
      >
        Convert
      </button>
    </div>
  );
};

export default Converter;
