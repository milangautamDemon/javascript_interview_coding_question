//given two strings how can you check if the strings are anagram from each other?
/*
to check if the given strings are anagram or not we will implement a customer method & write the logic.
1. first we will make them lowercase
2. then we will sort the strings
3. & finally we will join them back
4. the only thing then pending will be compare the strings.
*/
const string1 = "mary";
const string2 = "Army";
const checkAnagram = (str1, str2) => {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;
};
console.log(checkAnagram(string1, string2));
