function iterativeLog(array) {
array.forEach(function(element, index) {console.log(`${index}: ${element}`) })
}

function iterate(callback) {
  array = ["bandy chickens", "ducks", "geese"]
  callback(array)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
