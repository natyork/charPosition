
var userInput = process.argv.splice(2).join('');

countPosition(userInput);

function countPosition(input) {

  var charCount = {};
  var stringPos = 0;
  for (var key of input) {

    if (!charCount[key]) {
      charCount[key] = (newObj = {});
      newObj["Instance 1"] = "Position " + stringPos;

      // charCount[key] = 1;
    } else {
      var prevObj = charCount[key];
      var size = Object.keys(prevObj).length;
      prevObj[("Instance " + (size + 1))] = "Position " + stringPos;
    }
    stringPos++;
  }
  console.log(charCount);
}


