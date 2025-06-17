import { Access } from "@/constants";

export const isAccessible = (access: Access) =>
  access === Access.Discreet || access === Access.Public;
