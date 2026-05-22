import { clsx } from "clsx";

export const cn = (
  ...classes: string[]
) => {

  return clsx(classes);
};

export const generateSlug = (
  text: string
) => {

  return text
    .toLowerCase()
    .replace(/\s+/g, "-");
};