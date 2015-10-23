var fs = require('fs')
module.exports.index = function(req, res) {
    fs.readFile(__dirname + "/" + req.params.path, function(err, text){
        res.end(text);
    });
    return;
}
