export function isEmailValid(email) {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
}

export function isAdult(age) {
  return age > 18;
}
