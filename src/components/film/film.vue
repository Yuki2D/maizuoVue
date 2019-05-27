<template>
    <div id="film">
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
export default {
    name: "film",
    components: {scrollAd, tabs},
}
</script>

<style lang="scss" scoped>
    
</style>

