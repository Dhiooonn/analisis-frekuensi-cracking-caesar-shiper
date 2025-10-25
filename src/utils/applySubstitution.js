export function applySubstitution(text, substitutions) {
  return text
    .split("")
    .map((char) => {
      const upperChar = char.toUpperCase();
      if (substitutions[upperChar]) {
        const newChar = substitutions[upperChar];
        return char === upperChar ? newChar.toUpperCase() : newChar.toLowerCase();
      }
      return char;
    })
    .join("");
}
