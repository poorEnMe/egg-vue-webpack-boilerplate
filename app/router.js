
module.exports = app => {
  app.get('/', app.controller.login.login.index);
  app.post('/loginCheck', app.controller.login.login.loginCheck);
};
