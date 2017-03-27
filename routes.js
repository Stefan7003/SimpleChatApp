module.exports = function(app, io){

    app.get('/', function(req, res){
        res.render('index');
    });

    var chat = io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });
}