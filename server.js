var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')
var api          = require('./api')
var router       = Router()
router.get('/:path', api.index)

var server = http.createServer(function(req, res) {
    router(req, res, finalhandler(req, res))
})

var config = require('./config')

var io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket) {
    var ntp_timer = setInterval(function(){
        socket.emit('ntp:server_sync', {
            t1 : Date.now()
        });
    }, config.default.sleep)

    socket.on('disconnect', function(){
        clearInterval(ntp_timer)
    })
});

server.listen(3000, function(){ console.log('LISTEN AT 3000') })
