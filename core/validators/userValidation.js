import { isEmailValid, isAdult } from "./baseValidator.js";

export function isValidUser(user) {
  return (
    typeof user.name === "string" &&
    isEmailValid(user.email) &&
    isAdult(user.age) &&
    Array.isArray(user.roles) &&
    user.roles.length > 0
  );
}
