// ===============================================================================
// DATA
// Below data will hold all friend info
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    name: "Sulky Sally",
    photo: "Not available",
    scores: ["2","2","2","2","2","2","2","2","2","2"]
  },
  {
    name: "Friendly Fred",
    photo: "It's a secret",
    scores: ["1","2","3","4","5","4","3","2","1","2"]
  },
  {
    name: "Happy Helen",
    photo: "The name says it all",
    scores: ["5","5","5","5","5","5","5","5","5","5"]
  }

];
console.log("in friend array");
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;

