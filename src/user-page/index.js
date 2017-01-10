import page from 'page'
import title from 'title'
import empty from 'empty-element'
import template from './template'
import header from '../header'

page('/:username',loadUser,header, function (ctx,next) {
  var main = document.getElementById('main-container')
  title(`Gram - ${ctx.params.username}`)
  empty(main).appendChild(template(ctx.user))
});

page('/:username/:id',loadUser,header, function (ctx,next) {
  var main = document.getElementById('main-container')
  title(`Gram - ${ctx.params.username}`)
  empty(main).appendChild(template(ctx.user))

  $(`#modal${ctx.params.id}`).openModal();
});

async function loadUser(ctx, next){
  try{
    ctx.user = await fetch('/api/user/${ctx.params.username}}').then(res => res.json())
    next();
  }
  catch(err){
    console.log(err);
  }
}
