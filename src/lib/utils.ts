import { twMerge, ClassNameValue } from "tailwind-merge";

export const cn = (...args: ClassNameValue[]) => {
  return twMerge(...args);
};
