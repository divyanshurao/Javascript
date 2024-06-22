// falsy values
// false, -0, 0, BigInt, 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}, 

// Bullish Coalescing Operator (??): null undefined

var1 = 5 ?? 10;
console.log(var1); //5

var2 = null ?? 10;  // checks value safety for null (null exceptions)
console.log(var2); //10

var3 = undefined ?? 10;