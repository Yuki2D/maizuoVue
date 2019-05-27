<template>
  <div id="app">
    <posi></posi>
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar.vue"
import posi from "@/components/common/position/position"
export default {
  name: 'App',
  components: {tabbar,posi}
}
</script>

<style lang="scss">
#app {
  >div:not(:last-child){
    margin-bottom: 50px;
  }
  .swiper-wrapper{
    height: 210px;
  }
  .swiper-pagination{
    text-align: right;
    padding-right: 20px;
    box-sizing: border-box;
    .swiper-pagination-bullet{
      width: 4px;
      height: 4px;
      border: 1px solid #fff;
      &.swiper-pagination-bullet-active{
        background: #fff;
      }
    }
  }
}
</style>
