var gravatar = require('gravatar');

module.exports = function(app, io){
  app.get('/', function(req, res){
    res.render('index');
  });
  
  app.get('/create', function(req,res){
  	var id = Math.round((Math.random() * 1000000));
  	res.redirect('/chat/' + id);
  });

  app.get('/chat/:id', function(req,res){
    res.render('chat');
  });
  
  var chat = io.on('connection', function(socket){
    socket.on('load', function(data){
    });
    
    socket.on('login', function(data){
    });
    
    socket.on('disconnect', function() {
		});
    
    socket.on('messsage', function(data){
		});
  });
};