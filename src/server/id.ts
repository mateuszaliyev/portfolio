import { generateRandomString, type RandomReader } from "@oslojs/crypto/random";

import { environment } from "@/environment";

const DIGITS = "0123456789";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

const random: RandomReader = {
  read: (bytes: Uint8Array): void => {
    crypto.getRandomValues(bytes);
  },
};

export const generateId = () =>
  generateRandomString(random, LOWERCASE, 1) +
  generateRandomString(random, DIGITS + LOWERCASE, environment.ID_LENGTH - 1);
