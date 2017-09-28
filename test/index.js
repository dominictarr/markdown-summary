var M = require('../')
var image_msg = require('./data/WebGL-tm.json')
var title_p = require('./data/eliminate-email.json')
var hello = require('./data/hello-world.json')
var dogs = require('./data/two-dogs.json')
var tape = require('tape')

tape('extract image', function (t) {
  var img = M.image(image_msg.content.text)
  t.ok(img)
  console.log(img)
  t.equal(img, '![internet.jpg](&okCzgiD0I7Fq3xNPA/VQxvv4VMvC00URrql7Vs1wDLo=.sha256)')
  var title = M.title(image_msg.content.text)
  var summary = M.summary(image_msg.content.text)
  t.notOk(summary) //no summary
  console.log(title)
  t.equal(title, 'https://substack.neocities.org/igen/')

  t.end()
})

tape('image does not appear in title', function (t) {
  var img = M.image(dogs.content.text)
  var summary = M.summary(dogs.content.text)
  var title = M.title(dogs.content.text)
  t.ok(img)
  t.notOk(summary)
  t.notOk(title)
  t.end()
})

tape('extract title & summary', function (t) {
  var title = M.title(title_p.content.text)
  t.ok(title)
  console.log(JSON.stringify(title))
  t.equal(title, '**Eliminate email**')
  var summary = M.summary(title_p.content.text)
  t.ok(summary)
  console.log(JSON.stringify(summary))
  t.equal(summary, "[@gb](@ya/sq19NPxRza5xtoqi9BilwLZ7HgQjG3QpcTRnGgWs=.ed25519) said this morning that she's tired of receiving 300 spam messages a day --85% going to her spam folder.")
  t.end()
})

tape('extract title & summary from paragraph', function (t) {
  var title = M.title(hello.content.text)
  var summary = M.summary(hello.content.text)
  console.log(JSON.stringify([title, summary]))

  t.equal(title, "Hello world! Glad to be here. My client is taking an age to sync with this pub so...")
  t.equal(summary,"...I probably won't see your reply for a while yet, but I'm doing some exploring of the SSB ecosystem at the moment :)")
  t.end()
})



