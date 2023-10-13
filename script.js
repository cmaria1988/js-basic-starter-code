//Array hobbies
var hobbies = [
    "running",
    "swimming",
    "travelling",
    "watching",
    "dancing",
    "reading"
  ];
  
  //Log out the length of arrays hobbies
  console.log(hobbies.length);
  
  //Add a new hobby to the end of the array
  hobbies.push("boxing");
  
  //Log out 3rd element
  console.log(hobbies[2]);
  
  //Remove last element
  hobbies.pop();
  
  //Add 2 new elements after the 3 element
  hobbies.splice(2, 0, "sewing", "knitting");
  
  //Log out the array
  console.log(hobbies);
  
  //Remove first element
  hobbies.shift();
  
  //Add new hobbies as the first index
  hobbies.unshift("teaching");
  
  //Array goals
  var goals = [
    "Get a remote website job",
    "finish skillcrush bootcamp",
    "getting healthier"
  ];
  
  //combine hobbies and goals
  var allTheThings = [...hobbies, ...goals];
  
  //log out allTheThings
  console.log(allTheThings);
  
  //Choose element in the middle of allTheThings
  console.log(allTheThings.indexOf("travelling"));
  
  allTheThings.splice(4, 1);
  
  console.log(allTheThings);
  
  var plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}.`;
  });
  
  console.log(plans);
  