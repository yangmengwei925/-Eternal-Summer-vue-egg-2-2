const Service = require('egg').Service;

class PurposeService extends Service {
  
  async insert(obj){
    const { app } = this;
    return await app.mysql.insert('purpose_list',{id:null,...obj});
  }
}

module.exports = PurposeService;