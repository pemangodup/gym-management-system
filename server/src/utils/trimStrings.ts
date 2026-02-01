export const trimStrings = <T extends Record<string, any>>(obj: T) => {
  const trimmed = { ...obj };
  for (const key in trimmed) {
    if (typeof trimmed[key] === "string") {
      trimmed[key] = trimmed[key].trim();
    }
  }
  return trimmed;
};
