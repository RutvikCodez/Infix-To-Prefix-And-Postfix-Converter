export const precedence = (op: string) => {
    if (op === "+" || op === "-") {
      return 1;
    }
    if (op === "*" || op === "/") {
      return 2;
    }
    if (op === "^") {
      return 3;
    }
    return 0;
  };
