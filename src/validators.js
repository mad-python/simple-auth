// Basic implementation of required validator
export const required = (val) => !!val;

// Basic implementation of minLength validator
export const minLength = (num) => (val) => val.length >= num;

// Could be more validators
