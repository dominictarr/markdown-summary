# markdown-summary

extract useful things like a title, a summary, and a preview image from a freeform
markdown post.

``` js
var msum = require('markdown-summary')

var title = msum.title(text) //the first line, or the first 80 chars or so
var summary = msum.summary(text) //the next line, or the rest of the first line (if a whole paragraph)
var image = msum.image(text) //the first embedded image ![...](...)

```

## License

MIT

