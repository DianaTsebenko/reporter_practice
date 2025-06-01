import { isValidUser } from "../core/validators/userValidation.js";
import { isEmailValid, isAdult } from "../core/validators/baseValidator.js";

export function validateUser(user) {
  return {
    isValid: isValidUser(user),
    hasAdminRole: user.roles.includes("admin"),
    isEmailValid: isEmailValid(user.email),
    isAdult: isAdult(user.age),
  };
}
