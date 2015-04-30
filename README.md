ProgressBar-Stream
==================

>
> Wrapper for [progress](https://www.npmjs.com/package/progress) and [progress-stream](https://www.npmjs.com/package/progress-stream)
>

Render an ascii progress bar to display stream progress.

Installation
------------
```
npm install progressbar-stream
```

Usage
-----
```javascript
var progress = require('progressbar-stream');

var input = fs.createReadStream('file.txt');
var length = fs.statSync('file.txt').size;
input.pipe(progress({total: length}).pipe(...);
```

Usage on Object Streams
-----------------------
```javascript
var progress = require('progressbar-stream');

var inputs = [1, 2, 3, 4, 5, 6, 7];
from(inputs).pipe(progress({chunks: inputs.length})).pipe(...);
```
