<template>
    <div id="tabs" ref="tabs">
        <div></div>
        <ul>
            <li v-for="item in list" :key="item.name" :class="{'active': item.name==nowItem}" @click="showView(item)">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "tabs",
    data(){
        return {
            list: [
                {path: "nowplaying", name: "正在热映"},
                {path: "commingsoon", name: "即将上映"}
            ],
            nowItem: '正在热映'
        }
    },
    created() {
        // 监听滚动事件(tabs的吸顶效果)
        window.addEventListener("scroll", ()=>{
            if(this.$refs.tabs.offsetTop<document.documentElement.scrollTop){
                this.$refs.tabs.style.position="fixed";
            }else{
                this.$refs.tabs.style.position = "static";
            }
        })
        this.nowItem = window.sessionStorage.getItem("nowItem") //获取会话缓存的数据
    },
    methods: {
        showView: function(item){
            this.nowItem = item.name
            this.$router.push({path: item.path})
            window.sessionStorage.setItem("nowItem",this.nowItem);   //将nowItem设置到会话缓存
        }
    },
}
</script>

<style lang="scss" scoped>
    #tabs{
        border-bottom: 1px solid #f0f0f0;
        background: #fff;
        top: 0; 
        left: 0; 
        right: 0;
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
                color: #333;
                font-size: 14px;
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
                    border-bottom: 2px solid #ff6700;
                }
            }
        }
    }
</style>

