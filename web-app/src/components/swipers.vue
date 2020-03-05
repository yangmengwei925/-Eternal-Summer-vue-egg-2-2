<template>  
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in [1,2,3]" :key="item">
                <img :src="require('../assets/bg/'+item+'.jpg')"/>
            </div>     
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
    mounted(){
        new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
    }
}
</script>
<style scoped>
.swiper-container{
width: 100vw;
min-width: 1180px;
}
img{
    width: 100%;
}
</style>