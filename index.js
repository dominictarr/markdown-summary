

exports.title = function (source, lineLength) {
  source = source.trim()
  var line = source.trim().split('\n').shift().trim()
  //often people write a title or something as the first line anyway.
  //if they just start writing a paragraph, trim the first line from it.
  //(always break on a space)
  var i = line.indexOf(' ', lineLength || 80)
  var title = line.substring(0, ~i ? i : line.length)
  if(title.length < line.length)
    return title + '...'
  else
    return title
}

exports.summary = function (source, lineLength) {
  source = source.trim()
  var title = exports.title(source, lineLength)

  var lines = source.trim().split('\n')
    .map(function (e) { return e.trim() }).filter(Boolean)

  //check if the elipsis was added... to the first paragraph.
  if(/\.\.\.$/.test(title) && source.indexOf(title) != 0) {
    var firstLine = lines[0].trim()
    return '...'+firstLine.substring(title.length - 3).trim()
  }
  else if(lines[1])
    return lines[1]
  else return ''
}

exports.image = function (source) {
  var m = /(\!\[[^\]]+\]\([^\)]+\))/.exec(source)
  return m && m[1]
}

