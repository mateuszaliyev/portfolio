import { Access } from "@/constants";

export const compareAccess = (a: Access, b: Access) => {
  if (a === Access.Public) return -1;
  if (b === Access.Public) return 1;
  if (a === Access.Discreet) return -1;
  if (b === Access.Discreet) return 1;
  return 0;
};

export const isAccessible = (access: Access) =>
  access === Access.Discreet || access === Access.Public;
