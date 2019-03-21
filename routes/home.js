const path = require('path');


const routes = [
  {
    url: '/',
    method: 'get',
    controller: (ctx, next) => {
      return new Promise((resolve) => {
        const isAuthorize = ctx.isAuthenticated();

        if (isAuthorize) {
          resolve({body: ctx.render('home.pug'), status: 200});
        } else {
          resolve({body: ctx.render('login.pug'), status: 200});
        }

      })
    }
  },
];


module.exports = routes;
