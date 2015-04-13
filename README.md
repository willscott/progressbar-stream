ProgressBar-Stream
==================

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

input.pipe(progress({total: input.length}).pipe(output);
```


