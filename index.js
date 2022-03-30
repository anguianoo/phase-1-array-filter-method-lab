// Code your solution here

// This function takes an array of drivers' names and a string as arguments,
// and returns the matching list of drivers.
// The function should be case insensitive.

function findMatching(drivers, name) {
  return drivers.filter((match) => match.toLowerCase() === name.toLowerCase());
}

// This function takes an array of drivers' names and a
// string as arguments for querying the array,
// and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

// This function takes an array of driver objects and a string as arguments.
// Each driver object has two properties: name and hometown.
// The function should return each element whose name property matches the provided string argument.
function matchName(source, soughtName) {
  return source.filter((record) => record.name === soughtName);
}
