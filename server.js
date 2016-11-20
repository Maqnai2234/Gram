var express = require("express");

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render("index", {title: 'Platzigram'});
})
app.get('/signup', function(req, res){
  res.render("index", {title: 'Platzigram | Signup' });
})
app.get('/signin', function(req, res){
  res.render("index", {title: 'Platzigram | Signin' });
})

app.get('/api/pictures', function(req, res){
  var pictures = [
    {
        user: {
          username: "alexeim",
          avatar: "https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-1/p160x160/12376465_10207181886259400_5516580544980386974_n.jpg?oh=b63eafcabcbce0d218bb56838635b71c&oe=5858BCEC"
        },
        url: 'office.jpg',
        likes: 0,
        liked: false,
        createdAt: +new Date()
    },
    {
        user: {
          username: "alexeim2",
          avatar: "https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-1/p160x160/12376465_10207181886259400_5516580544980386974_n.jpg?oh=b63eafcabcbce0d218bb56838635b71c&oe=5858BCEC"
        },
        url: 'office.jpg',
        likes: 2,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function(){
    res.send(pictures);
  },2000);

})
app.listen(3000, function(err) {
  if(err) return console.log("Hubo un error"), process.exit(1);
  // Respond.
  console.log("CloneGram escuchando en el puerto 3000");
})
