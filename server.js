var express = require("express");
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

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
          avatar: "https://scontent-eze1-1.cdninstagram.com/t51.2885-15/e15/11420480_923834564346203_763926557_n.jpg?ig_cache_key=MTAwOTQ4OTA4ODIyMTk2OTEwNA%3D%3D.2"
        },
        url: 'office.jpg',
        likes: 0,
        liked: false,
        createdAt: +new Date()
    },
    {
        user: {
          username: "alexeim2",
          avatar: "https://scontent-eze1-1.cdninstagram.com/t51.2885-15/e15/11420480_923834564346203_763926557_n.jpg?ig_cache_key=MTAwOTQ4OTA4ODIyMTk2OTEwNA%3D%3D.2"
        },
        url: 'office.jpg',
        likes: 2,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];
  setTimeout(() => res.send(pictures),2000);

});

app.post('/api/pictures', function(req, res){
  upload(req, res, function(err){
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File upload');
  })
})

app.get('/api/user/:username', function(req,res){
  const user = {
    username: 'alexeim',
    avatar:"https://scontent-eze1-1.cdninstagram.com/t51.2885-19/11333569_365261623669143_724161223_a.jpg",
    pictures: [
      {
        id: 1,
        src: "https://scontent-eze1-1.cdninstagram.com/t51.2885-15/e35/15337168_1518268694855332_3793207728759898112_n.jpg?ig_cache_key=MTM5ODE1ODEyNjEzMzY2MzkwNA%3D%3D.2",
        likes: 2
      },
      {
        id: 2,
        src: "https://scontent-eze1-1.cdninstagram.com/t51.2885-15/e15/11420480_923834564346203_763926557_n.jpg?ig_cache_key=MTAwOTQ4OTA4ODIyMTk2OTEwNA%3D%3D.2",
        likes: 10
      }
    ]

  }

  res.send(user);
})

app.get('/:username', function(req,res){
  res.render('index', {title: `Gram - ${req.params.username}` })
})

app.listen(3000, function(err) {
  if(err) return console.log("Hubo un error"), process.exit(1);
  // Respond.
  console.log("CloneGram escuchando en el puerto 3000");
})
