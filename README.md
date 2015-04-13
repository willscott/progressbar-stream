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

