const substitutionModule = (function () {
  
  const standard = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    let result = "";
    let string = input.toLowerCase();
    if (!alphabet || !(alphabet.length === 26)) return false;
    for (let letter in alphabet) {
      let count = 0;
      for (let i = 0; i < 26; i++) {
        if (alphabet[letter] === alphabet[i]) count++;
      };
      if (count > 1) return false;
    };
    
    if (encode) {
      for (let letter in string) {
        if (!alphabet.includes(string[letter])) {
          result += string[letter];
        } else {
          const index = standard.indexOf(string[letter]);
          result += alphabet[index];
        };
      };
      return result;
    } else {
      for (letter in string) {
        if (!alphabet.includes(string[letter])) {
          result += string[letter];
      } else {
        const index = alphabet.indexOf(string[letter]);
        result += standard[index];
        };
      };
      return result;
    };
  // end substitution
  };
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
