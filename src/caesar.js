const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    };
    if (encode === false) shift = -shift;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let result = "";
    input = input.toLowerCase();
    
    for(let i = 0; i < input.length; i++) {
      let currentLetter = input[i];
      if (currentLetter === " ") {
        result += currentLetter;
        continue;
      };
      if(currentLetter.toLowerCase() === currentLetter.toUpperCase()){
		result += currentLetter;		
		continue;
      };
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + shift;
      if (newIndex > 25) {
        newIndex = newIndex - 26
      };
      if (newIndex < 0) {
        newIndex = newIndex + 26
      };
      result += alphabet[newIndex];
    }
  return result;    
    
  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
