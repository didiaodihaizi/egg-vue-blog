
module.exports = app => {
  app.get('/blog/list', app.controller.blog.list);
  app.get('/api/article/:id', app.controller.app.detail);
  app.get('/*', app.controller.app.index);
};
