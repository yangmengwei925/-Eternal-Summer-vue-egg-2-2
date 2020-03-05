<template>
   <div class="y-container">
      <div class="y-h1">
        <h1>
          <span>WHY</span> CHOOSE US
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
        <img src="@/assets/img/1.png" alt />
      </div>
      <div class="y-container-div">
        <div class="y-container-left">
          <dl>
            <dt>
              <span class="iconfont">&#xe605;</span>
            </dt>
            <dd>
              <h4>Online Booking Services</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="iconfont">&#xe704;</span>
            </dt>
            <dd>
              <h4>Book Cheap Online</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="iconfont">&#xe6e5;</span>
            </dt>
            <dd>
              <h4>Hotel Booking</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="iconfont">&#xe60f;</span>
            </dt>
            <dd>
              <h4>Taxi Cap Booking</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="iconfont">&#xe60b;</span>
            </dt>
            <dd>
              <h4>Amazing Tour</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
            </dd>
          </dl>
        </div>
        <div class="y-container-right">
          <img src="@/assets/img/2.png" alt />
        </div>
      </div>
    </div>
</template>


<style scoped>
/* 父盒子宽度百分百 */

.y-container {
  width: 1100px;
  margin: 0 auto;
  height: 992px;
}
.y-h1 {
  text-align: center;
  padding-top: 105px;
}
.y-h1 h1 {
  font-size: 30px;
  color: #ffb300;
  margin-bottom: 29px;
}
.y-h1 h1 span {
  color: black;
}
.y-h1 p {
  font-size: 14px;
  margin-bottom: 20px;
}
.y-container-div {
  display: flex;
  margin: 0 auto;
  margin-top: 95px;
}
.y-container-left {
  width: 580px;
  height: 574px;
  margin-left: 367px;
}
.y-container-left dl {
  width: 570px;
  height: 89px;
  display: flex;
  margin-bottom: 45px;
}
.y-container-left dl dt {
  width: 70px;
  height: 70px;
  background: #f1f1f1 none repeat scroll 0 0;
  border-radius: 50%;
  text-align: center;
  line-height: 70px;
}
.y-container-left dl dt span {
  font-size: 23px;
  color: #ffb300;
}
.y-container-left dl dd {
  width: 474px;
  height: 74px;
  margin-left: 28px;
}
.y-container-left dl dd h4 {
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 500;
}
.y-container-left dl dd p {
  font-size: 14px;
  width: 485px;
  line-height: 24px;
}
</style>