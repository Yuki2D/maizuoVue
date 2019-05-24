<template>
    <div id="tabbar">
        <ul>
            <li v-for="item in list" :key="item.name" :class="{'active': item.name==nowItem}" @click="showView(item)">
                <i class="iconfont" v-html="item.i"></i>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "film",
    data(){
        return {
            list: [
                {path: "/film", name: "电影", i: "&#xe6af;"},
                {path: "/cinema", name: "影院", i: "&#xe61d;"},
                {path: "/discount", name: "特惠", i: "&#xe64a;"},
                {path: "/me", name: "我的", i: "&#xe600;"},
            ],
            nowItem: '电影'
        }
    },
    methods: {
        showView: function(item){
            this.nowItem = item.name
            this.$router.push({path: item.path})
        }
    },
}
</script>

<style lang="scss" scoped>
    #tabbar{
        border-top: 1px solid #f0f0f0;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        ul{
            height: 48px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #b0b0b0;
                padding: 0 10px;
                i{
                    font-size: 26px;
                }
                span{
                    font-size: 12px;
                }
                &:nth-child(2),&:nth-child(3){
                    i{
                        font-size: 24px;
                    }
                }
                &.active{
                    color: #ff6700;
                }
            }
        }
    }
</style>

