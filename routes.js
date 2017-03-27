module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index');
    });

    var chat = io.on('connection', function(socket){
        console.log('a user connected');
    });
}