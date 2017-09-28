var summary = require('../')
var image_msg = require('./data/WebGL-tm.json')

var tape = require('tape')

tape('extract image', function (t) {
  var img = summary.image(image_msg.content.text)
  t.ok(img)
  console.log(img)
  t.end()
})
