// Basic implementation of required validator
export const required = (val) => !!val;

// Basic implementation of minLength validator
export const minLength = (num) => (val) => val.length >= num;

// Basic email validator (reg exp)
export const validEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Could be more validators
