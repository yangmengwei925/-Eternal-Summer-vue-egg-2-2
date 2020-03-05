const Service = require('egg').Service;

class ProductService extends Service {
  
  async list(){
    const { app } = this;
    return await app.mysql.select('product_list');
  }
  async search(obj){
    const { app } = this;
    return await app.mysql.select('product_list',{where:obj});
  }
}

module.exports = ProductService;