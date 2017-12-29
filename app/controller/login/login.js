

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

        async loginCheck(){
            console.log(this.ctx.request.body);
            let account = this.ctx.request.body.account;
            let xpassword = this.ctx.request.body.xpassword;
            let result = await this.ctx.model.User.auth(account,xpassword);
            if(result){
                this.ctx.body = {
                    result:1
                }
            }else{
                this.ctx.body = {
                    result:0
                }
            }
        }


    };
};