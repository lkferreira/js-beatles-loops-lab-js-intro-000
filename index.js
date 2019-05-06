function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 1; i < musicians.length + 1; i++) {
    array.push(`${musicians[i-1]} plays ${instruments[i-1]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length + 1) {
    array[i] = `${array[i]}!!!`
    i++
  }
  return array
}