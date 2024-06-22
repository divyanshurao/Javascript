const ar1 = [0, 1, 2, 3, 4, 5, 6];

console.log("A", ar1); //original array

console.log("B", ar1.slice(1,4)); // Picks element from 1st index till 3rd, doest' include 4th

console.log("C", ar1.splice(1,4)); // Picks element from 1st to 4th(included) and MODIFIES THE ORIGINAL ARRAY

console.log("D", ar1); //[0,5,6]  MODIFIED ARRAY due to SPLICE