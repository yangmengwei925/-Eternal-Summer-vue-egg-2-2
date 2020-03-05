<template>
  <div class="specialpack">
    <div class="top">
      <h1>
        <b>SPECIAL</b>
        <b style="color:orange;"> PACKAGES</b>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      <p>
        <img src="@/assets/special/shape.png" alt />
      </p>
    </div>

    <div class="con">
      <div class="item">
        <div class="fix">
          <img src="@/assets/special/8.jpg" alt />
        </div>
        <div class="fixTop">
          <p>
            Offer Available
            <b>$300</b>
          </p>
        </div>
        <div class="fixBottom">1</div>
        <div class="dialog">
          <h4 style="color:orange">AUSTRALIA</h4>
          <p style="color:#fff;margin-top:-15px;">5 DAYS 4 NIGHTS</p>
          <p
            style="color:#fff;margin-top:-10px"
          >Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididuntq thgf</p>
          <b class="viewBtn">VIEW MORE</b>
        </div>
      </div>
      <div class="item">
        <div class="fix">
          <img src="@/assets/special/1.jpg" alt />
        </div>
        <div class="fixTop">
          <p>
            Offer Available
            <b>$300</b>
          </p>
        </div>
        <div class="fixBottom">1</div>
        <div class="dialog">
          <h4 style="color:orange">AUSTRALIA</h4>
          <p style="color:#fff;margin-top:-15px;">5 DAYS 4 NIGHTS</p>
          <p
            style="color:#fff;margin-top:-10px"
          >Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididuntq thgf</p>
          <b class="viewBtn">VIEW MORE</b>
        </div>
      </div>
      <div class="item">
        <div class="fix">
          <img src="@/assets/special/3.jpg" alt />
        </div>
        <div class="fixTop">
          <p>
            Offer Available
            <b>$300</b>
          </p>
        </div>
        <div class="fixBottom">1</div>
        <div class="dialog">
          <h4 style="color:orange">AUSTRALIA</h4>
          <p style="color:#fff;margin-top:-15px;">5 DAYS 4 NIGHTS</p>
          <p
            style="color:#fff;margin-top:-10px"
          >Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididuntq thgf</p>
          <b class="viewBtn">VIEW MORE</b>
        </div>
      </div>
      <div class="item">
        <div class="fix">
          <img src="@/assets/special/4.jpg" alt />
        </div>
        <div class="fixTop">
          <p>
            Offer Available
            <b>$300</b>
          </p>
        </div>
        <div class="fixBottom">1</div>
        <div class="dialog">
          <h4 style="color:orange">AUSTRALIA</h4>
          <p style="color:#fff;margin-top:-15px;">5 DAYS 4 NIGHTS</p>
          <p
            style="color:#fff;margin-top:-10px"
          >Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididuntq thgf</p>
          <b class="viewBtn">VIEW MORE</b>
        </div>
      </div>
      <div class="item">
        <div class="fix">
          <img src="@/assets/special/5.jpg" alt />
        </div>
        <div class="fixTop">
          <p>
            Offer Available
            <b>$300</b>
          </p>
        </div>
        <div class="fixBottom">1</div>
        <div class="dialog">
          <h4 style="color:orange">AUSTRALIA</h4>
          <p style="color:#fff;margin-top:-15px;">5 DAYS 4 NIGHTS</p>
          <p
            style="color:#fff;margin-top:-10px"
          >Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididuntq thgf</p>
          <b class="viewBtn">VIEW MORE</b>
        </div>
      </div>
      <div class="item">
        <div class="fix">
          <img src="@/assets/special/6.jpg" alt />
        </div>
        <div class="fixTop">
          <p>
            Offer Available
            <b>$300</b>
          </p>
        </div>
        <div class="fixBottom">1</div>
        <div class="dialog">
          <h4 style="color:orange">AUSTRALIA</h4>
          <p style="color:#fff;margin-top:-15px;">5 DAYS 4 NIGHTS</p>
          <p
            style="color:#fff;margin-top:-10px"
          >Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididuntq thgf</p>
          <b class="viewBtn">VIEW MORE</b>
        </div>
      </div>
    </div>

    <div class="footer">
      <h1>FSPECIAL TOUR IN JUNE, DISCOVER AMERICA FOR 100</h1>
      <h2>
        CUSTOMERS WITH DISCOUNT
        <b style="color:orange;font-size:50px;">40%</b>
      </h2>
      <div class="timeBox">
        <div class="item_small">0</div>
        <div class="item_small">0</div>
        <div class="item_big">00</div>
        <div class="item_big">00</div>
      </div>
      <button>GET TOUR</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.specialpack {
  width: 1100px;
  margin: 0 auto;
  height: 1500px;

  .top {
    height: 80px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .con {
    margin-bottom: 80px;
    width: 100%;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      &.item:hover {
        .dialog{
            opacity: 1;
          transition: all 0.5s;
        }
        .fixBottom {
          display: block;
          transition: all 0.5s;
        }
      }
      // display: flex;
      position: relative;
      width: 30%;
      height: 350px;
      // flex-direction: column;
      .fixTop {
        position: absolute;
        bottom: 10%;
        left: 20%;
        background: #fff;
        width: 60%;
        height: 50px;
        line-height: 50px;
      }
      .dialog {
        // display: none;
        opacity: 0;
        width: 60%;
        height: 60%;
        position: absolute;
        top: 16%;
        left: 20%;
        background: rgba($color: #000000, $alpha: 0.6);
        .viewBtn {
          color: orange;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .fix {
        flex: 1;
        width: 100%;
        height: 80%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .fixBottom {
        display: none;
        width: 100%;
        height: 60px;
        background: #fff;
        // border: 1px solid #ccc;
        box-shadow: 0px 0px 20px #000;
      }
    }
  }
  .footer {
    width: 100%;
    height: 480px;
    background: rgba($color: #000, $alpha: 0.4);
    color: #fff;
    z-index: 12;
    h1 {
      padding-top: 100px;
      font-size: 40px;
      font-weight: 300;
    }
    h2 {
      // margin-top: 100px;
      font-size: 30px;
      font-weight: 500px;
    }
    .timeBox {
      width: 300px;
      height: 60px;
    //   background: pink;
    display: flex;
    justify-content: space-around;
      margin: 0 auto;
      color: orange;
      font-size: 30px;
      line-height: 60px;
      
      .item_small{
          width: 20%;
          margin:0 10px;
          background: rgba($color: #fff, $alpha: 0.2)
      }
      .item_big{
          margin:0 10px;
          width: 40%;
          background: rgba($color: #fff, $alpha: 0.2)
      }
    }
    button {
      background: rgba($color: #000, $alpha: 0.5);
      color: #fff;
      font-size: 17px;
      margin-top: 50px;
      width: 120px;
      height: 40px;
      line-height: 40px;
      border: 1px solid orange;
      border-radius: 40px;
      outline: none;
      font-size: 500;
      cursor: pointer;
    }
  }
}
</style>