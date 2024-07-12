export const initialForm = {
  name: '',
  phone: '',
  description: '',
  type: null,
  date: null,
};

export const verifyForm = (form) =>
  Object.keys(initialForm).every((key) => form[key] !== initialForm[key]);
