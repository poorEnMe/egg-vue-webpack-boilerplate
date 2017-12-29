

module.exports = app => {

  return class LoginController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('login/login.js');
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('login/login.js');
    }


  };
};