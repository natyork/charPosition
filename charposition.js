
var userInput = process.argv.splice(2).join('');

countPosition(userInput);

function countPosition(input) {

  var charCount = {};
  var stringPos = 0;
  for (var key of input) {

    if (!charCount[key]) {
      charCount[key] = (newObj = {});
      newObj.firstInst = stringPos;

      // charCount[key] = 1;
    } else {
      var prevObj = charCount[key];
      var size = prevObj.size;
      console.log(size)
      prevObj["secondInst"] = stringPos;
    }
    stringPos++;
  }
  console.log(charCount);
}


