(function (root) {

  var ntp  = {}
    , offsets = []
    , socket;

  ntp.init = function (sock, options) {
    options = options || {};

    socket = sock;
    socket.on('ntp:server_sync', onSync.bind(options));
  };

  var onSync = function (data) {
    options.callback( data.t1 )
  };

  // AMD/requirejs
  if (typeof define === 'function' && define.amd) {
    define('ntp', [], function () {
      return ntp;
    });
  } else {
    root.ntp = ntp;
  }

})(window);
