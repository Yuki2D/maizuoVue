<template>
    <div id="nowplaying">
        <ul ref="myDom">
            <li v-for="(val,index) in data" :key="index">
                <div class="li_left">
                    <img :src="val.poster"/>
                </div>
                <div class="li_right">
                    <div class="txt">
                        <p>{{val.name}}<span>2D</span></p>
                        <p>
                            <template v-if="val.grade">
                                观众评分<span>{{val.grade}}</span>
                            </template>
                        </p>
                        <p>
                            主演: 
                            <span v-for="(actor,ind) in val.actors" :key="ind">
                                {{actor.name}}
                            </span>
                        </p>
                        <p><span>{{val.nation}}</span> | <span>{{val.runtime}}</span>分钟</p>
                    </div>
                    <div class="btn">
                        <span>购票</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "nowplaying",
    data(){
        return {
            data: [],
            isCanScroll: true,
            num: 2,
            total: ""
        }
    },
    created() {
        this.getData();
        
    },
    methods: {
        async getData(){
            let res = await this.$http.get('/nowPlaying1');
            this.data = res.data.data.films;
            this.total = res.data.data.total;
        }
    },
    mounted() {
        window.onscroll = (ev)=>{
            var bigH =  document.querySelector("#app").clientHeight;    //可滚动容器的高度
            var screenH = document.documentElement.clientHeight;          //屏幕尺寸高度
            var overflowH = document.documentElement.scrollTop;           //可滚动容器超出屏幕尺寸高度
            if(bigH < screenH+overflowH+50 && this.isCanScroll){         //到底了
                if(this.data.length<this.total){
                    this.isCanScroll = false;
                    this.$http.get("/nowPlaying"+(this.num++)).then((res)=>{
                        this.data =  this.data.concat(res.data.data.films)
                        this.total = res.data.data.total;
                        this.isCanScroll = true;
                    })
                }else{
                    console.log("没有更多数据了");
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    ul{
		padding-left: 15px;
        li{
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            padding: 15px 15px 15px 0;
            height: 124px;
            box-sizing: border-box;
            &:last-child{
                border-bottom: none;
            }
            .li_left{
                width: 66px;
                img{
                    width: 100%;
                }
            }
            .li_right{
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 10px;
                .txt{
                    width: 209px;
                    height: 100%;
                    color: #999;
                    font-size: 13px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    p{
                        width: 209px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        &:first-child{
                            font-size: 16px;
                            color: #333;
                            span{
                                color: #fff;
                                background-color: #D2D6DC;
                                padding: 0 3px;
                                font-size: 12px;
                                border-radius: 3px;
                                margin-left: 5px;
                            }
                        }
                        &:nth-child(2) {
                            span{
                                color: #FFB232;
                                margin-left: 5px;
                            }
                        }
                    }
                }
                .btn span{
                    border: 1px solid #FFB232;
                    color: #FF6700;
                    font-size: 13px;
                    padding: 3px 10px;
                    border-radius: 3px;
                }
            }
        }
	}
</style>

