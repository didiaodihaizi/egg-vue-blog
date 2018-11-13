const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class BlogController extends Controller {
  async index() {
    await this.ctx.render('app.js', { url: this.ctx.url });
  }

  async list() {
    const pageIndex = this.ctx.query.page || 1;
    const pageSize = this.ctx.query.size || 10;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = Number(this.ctx.params.id);
    this.ctx.body = Model.getDetail(id);
  }
}

module.exports = BlogController;