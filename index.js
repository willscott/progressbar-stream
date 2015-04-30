var PBar = require('progress');
var pstream = require('progress-stream');

module.exports = function (options) {
  if (options.chunks) {
    var listener = pstream({});
    var bar = new PBar(':bar :percent :eta', {
      total: options.chunks
    });
    listener.on('progress', function (p) {
      bar.tick();
    });
    return listener;
  } else {
    var listener = pstream({
      time: 100,
      length: options.total
    });
    var bar = new PBar(':bar :percent :eta', options);
    listener.on('progress', function (p) {
      bar.tick(p.delta);
    });
    return listener;
  }
};
