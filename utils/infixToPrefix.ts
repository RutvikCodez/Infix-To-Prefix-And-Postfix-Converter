import { isOperator } from "./isOperator";
import { precedence } from "./precedence";

export const infixToPrefix = (infix: string) => {
    infix = infix.split("").reverse().join("");
    infix = infix.replace(/\(/g, "#");
    infix = infix.replace(/\)/g, "(");
    infix = infix.replace(/\#/g, ")");
    let stack: string[] = [];
    let output = [];
    let tokens = infix.match(/\S+/g);
    tokens?.map((token) => {
      if (!isOperator(token) && token !== "(" && token !== ")") {
        output.push(token);
      } else if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        while (stack.length && stack[stack.length - 1] !== "(") {
          output.push(stack.pop());
        }
        stack.pop();
      } else {
        while (
          stack.length &&
          precedence(token) < precedence(stack[stack.length - 1])
        ) {
          output.push(stack.pop());
        }
        stack.push(token);
      }
    });
    while (stack.length) {
      output.push(stack.pop());
    }
    let postFix = output.join(" ");
    let prefix = postFix.split("").reverse().join("");
    return prefix;
  };