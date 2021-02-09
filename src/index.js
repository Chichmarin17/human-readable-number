module.exports = function toReadable (number) {
  let objNumbers = {
      1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
      10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 
      17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty',
      50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred',
  }
  number = number.toString().split("");
  let final = [];
  if (number.lenth == 0 || number[0] == 0) return 'zero';
  if (number.length == 1) {
      final.push(objNumbers[number[0]]);
  }
  
  if (number.length == 3) {
      final.push(objNumbers[number[0]]);
      final.push('hundred');
      number.shift();
  }
  if (number.length == 2) {
    if ( (number[0] != 0) && ( (number[0] == 1) || (number[number.length - 1] == 0)) ) {
        if ( Object.keys(objNumbers).includes(number.join("")) ) {
            final.push(objNumbers[number.join("")]);
        } 
    } else if (number[0] == 0) {
        final.push(objNumbers[number[1]]);
    } else {
        final.push(objNumbers[number[0] + "0"]);
        number.shift();
        final.push(objNumbers[number[0]]);
        }
  }        
  return final.join(" ").trim();
}
