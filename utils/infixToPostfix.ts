import { isOperator } from "./isOperator";
import { precedence } from "./precedence";

export const infixToPostfix = (infix: string) => {
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
          precedence(token) <= precedence(stack[stack.length - 1])
        ) {
          output.push(stack.pop());
        }
        stack.push(token);
      }
    });
    while (stack.length) {
      output.push(stack.pop());
    }
    return output.join(" ");
  };