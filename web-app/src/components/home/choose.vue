<template>
  <div class="choose_us">
    <div class="top">
      <h1>
        WHY
        <span class="choose">CHOOSE US</span>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      <h1>
        <img src="/imgs/why.png" alt srcset />
      </h1>
    </div>
    <div class="bottom">
      <div class="list-child">
        <div class="img">
          <img src="/imgs/b1.png" alt srcset />
        </div>
        <div class="diverse">Diverse Destination</div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipisicing elit, sed do eiusmod tempor</p>
          <p>incididunt ut laborelorem</p>
        </div>
      </div>
      <div class="list-child">
        <div class="img">
          <img src="/imgs/b2.png" alt srcset />
        </div>
        <div class="diverse">Value Of Money</div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipisicing elit, sed do eiusmod tempor</p>
          <p>incididunt ut laborelorem</p>
        </div>
      </div>
      <div class="list-child">
        <div class="img">
          <img src="/imgs/b3.png" alt srcset />
        </div>
        <div class="diverse">Passionate Travel</div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipisicing elit, sed do eiusmod tempor</p>
          <p>incididunt ut laborelorem</p>
        </div>
      </div>
      <div class="list-child">
        <div class="img">
          <img src="/imgs/b4.png" alt srcset />
        </div>
        <div class="diverse">Beautiful Places</div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipisicing elit, sed do eiusmod tempor</p>
          <p>incididunt ut laborelorem</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.choose_us {
    margin: 30px auto;
    width: 1100px;
    height: 670px;
    display: flex;
    flex-direction: column;
  .top {
    height: 300px;
    padding-top: 80px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    h1,
    p {
      height: 70;
      line-height: 70px;
      .choose {
        color: #f90;
      }
    }
  }
  .bottom {
    height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
    .list-child {
      width: 370px;
      text-align: center;
      height: 370px;
      .diverse {
        height: 60px;
        line-height: 60px;
        font-size: 24px;
        font-weight: 500;
      }
      .text {
        p {
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>