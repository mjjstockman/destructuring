/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */


// without destructuring...
    // let ages = [12, 32, 43];
    // let john = ages[2];
    // let frank = ages[0];
    // let kev = ages[1];

// console.log(john, frank, kev);

// Destructuring arrays
let ages = [12, 32, 43];
// creates obj wth the names john, frank and kev and set their value to the order in ages list
let[john, frank, kev] = ages;
console.log(john, frank, kev)

// Destructuring objects
let jobs = {
    mike: "DJ",
    kelly: "chef",
    matt: "dev"
}

let {mike, kelly, matt} = jobs;
console.log(mike, kelly, matt);

// Destructuring subsets
let languages = ['english', 'french', 'german', 'japanese', 'russian'];
// commas skip an index in the array on assignment
let [johnNative, , , johnSecondary] = languages;
console.log(johnSecondary);

// if destructuring an obj
let languages2 = {
    main: "english",
    secondary: "japanese"
};

// can use the key for any in the dict/obj
let { main, secondary } = languages2;
console.log(main, secondary);

// Using rest parameter syntax
let fruits = ['apple', 'kiwi', 'orange', 'plum'];
let [favourite, secondFavourite, ...others] = fruits;
console.log(secondFavourite);
// returns array of others
console.log(others);

