export function generateId() {
  return Date.now().toString(36);
}

export function getFormData(form) {
  const data = new FormData(form);
  const inputData = Object.fromEntries(data.entries());
  return inputData;
}
