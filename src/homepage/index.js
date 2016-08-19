var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require("title");

page('/', function(ctx, next){
  title('Platzigram')
  var main = document.getElementById('main-container');

  var pictures = [
    {
        user: {
          username: "alexeim",
          avatar: "https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-1/p160x160/12376465_10207181886259400_5516580544980386974_n.jpg?oh=b63eafcabcbce0d218bb56838635b71c&oe=5858BCEC"
        },
        url: 'office.jpg',
        likes: 20,
        liked: true
    },
    {
        user: {
          username: "alexeim2",
          avatar: "https://scontent.fgru3-1.fna.fbcdn.net/v/t1.0-1/p160x160/12376465_10207181886259400_5516580544980386974_n.jpg?oh=b63eafcabcbce0d218bb56838635b71c&oe=5858BCEC"
        },
        url: 'office.jpg',
        likes: 2,
        liked: true
    }
  ];

  empty(main).appendChild(template(pictures));
})
