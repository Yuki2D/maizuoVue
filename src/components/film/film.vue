<template>
    <div id="film">
        <posi></posi>
        <scroll-ad></scroll-ad>        
        <tabs></tabs>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import scrollAd from "@/components/film/scrollAd/scrollAd"
import tabs from "@/components/film/tabs/tabs"
import posi from "@/components/common/position/position"
export default {
    name: "film",
    components: {scrollAd, tabs, posi},
    created() {
       
    },
}
</script>

<style lang="scss" scoped>
    
</style>

