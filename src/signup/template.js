var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="title-logo">CloneGram</h1>
      <form class="signup-form">
        <h2>Regístrate para ver fotos de  tus amigos</h2>
        <div class="section">
          <a href="" class="btn btn-fb hide-on-small-only"> Iniciar sesión con Facebook</a>
          <a href="" class="btn btn-fb hide-on-med-and-up"> Iniciar sesión</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder="Correo Electrónico">
          <input type="text" name="name" placeholder="Nombre Completo">
          <input type="text" name="username" placeholder="Nombre de usuario">
          <input type="password" name="password" placeholder="Contraseña">
          <button class="btn waves-effect waves-light btn-signup-form" type="submit"> Regístrate</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿Tienes una cuenta? <a href="/signin">Entrar</a>
    </div>
  </div>
</div>`;

module.exports = landing(signupForm);
