<template>
    <div id="position">
        <span>{{city}}</span>
        <i class="iconfont">&#xe62d;</i>
    </div>
</template>
<script>
export default {
    name: "position",
    data() {
        return {
            city: "深圳"
        }
    },
}
</script>

<style lang="scss" scoped>
    #position{
        position: absolute;
        left: 20px;
        top: 20px;
        z-index: 9;
        color: #fff;
        background: rgba(0,0,0,.5);
        padding: 5px;
        border-radius: 30px;
        font-size: 14px;
        i{
            font-size: 10px;
        }
    }
</style>

