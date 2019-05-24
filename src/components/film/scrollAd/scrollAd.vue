<template v-if=bannerList.length>
    <swiper :options="swiperOption">
        <swiper-slide  v-for="(item,index) in bannerList" :key="index">
            <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data() {
        return {
            bannerList: [],
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                },
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 30,
                // loop: true       不要写这个,是坑(加上反而不会循环)
            },
        }
    },
    created() {
        this.getData()
    },
    methods: {
        // ES8新增的async&await:将异步变同步
        async getData(){
            let res = await this.$http.get('/banner');
            this.bannerList = res.data.data;
        }
    },
    // 挂载之后
    mounted() { 
    },
    components: { 
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: 210px;
    }
</style>
