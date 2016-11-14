var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

var signinForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="title-logo">CloneGram</h1>
      <form class="signup-form">
        <div class="section">
          <a href="" class="btn btn-fb hide-on-small-only"> ${translate.message('signup.facebook')}</a>
          <a href="" class="btn btn-fb hide-on-med-and-up"> <i class="fa fa-facebook-official" aria-hidden="true"></i> ${translate.message('signin')}</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder="${translate.message('email')}">
          <input type="password" name="password" placeholder="${translate.message('password')}">
          <button class="btn waves-effect waves-light btn-signup-form" type="submit"> ${translate.message('signup.text')}</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a>
    </div>
  </div>
</div>`

module.exports = landing(signinForm);
