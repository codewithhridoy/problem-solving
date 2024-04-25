/**
 * @param {string} s
 * @return {number}
 */

const mapRomanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const romanToInt = function (s) {

  // let result = 0;
  // let i = 0;
  // while (i < s.length) {
  //   const current = s[i];
  //   const next = s[i + 1];
  //   const currentValue = mapRomanValues[current];
  //   const nextValue = mapRomanValues[next];

  //   if (currentValue < nextValue) {
  //     result += nextValue - currentValue;
  //     i += 2;
  //   } else {
  //     result += currentValue;
  //     i += 1;
  //   }
  // }
  // return result;

  const chars = s.split('');

  return chars.reduce((result, current, index) => {
    const currentValue = mapRomanValues[current];
    const nextValue = mapRomanValues[chars[index + 1]];

    if (currentValue < nextValue) {
      return result - currentValue;
    } else {
      return result + currentValue;
    }
  }, 0);
};
