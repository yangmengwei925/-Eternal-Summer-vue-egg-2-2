'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
 
  // 旅游意向调查的option内容返回
  async list(){
    const { ctx,app } = this;
    let data = await ctx.service.product.list();
    ctx.body = app.sendMes(0,'请求成功',data)
  }
  // 模糊搜索
  async search(){
    const { ctx,app } = this;
    const { place,keyword,star,day } = ctx.request.body;
    
    let data

    let obj = {star,day};

    if(star !=='') obj.star = star;
    if(day  !=='') obj.day = day;
    data = await ctx.service.product.search(obj);

    if(place !== ''){
      data = data.filter(item => item.place.indexOf(place)!==-1)
    }

    if(keyword !== ''){
      data = data.filter(item => item.describe.indexOf(keyword)!==-1)
    }

    ctx.body = app.sendMes(0,'请求成功',data)
  }
  //详情展示
  async detail(){
    const { ctx,app } = this;
    const { id } = ctx.request.body;
    let data = await ctx.service.detail.list(id)
    ctx.body = app.sendMes(0,'请求成功',data)

  }
}

module.exports = ProductController;
