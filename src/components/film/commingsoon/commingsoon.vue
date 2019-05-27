<template>
    <div id="commingsoon">
        <ul ref="myDom">
            <li v-for="(val,index) in data" :key="index">
                <div class="li_left">
                    <img :src="val.poster"/>
                </div>
                <div class="li_right">
                    <div class="txt">
                        <p>
                            <span>{{val.name}}</span>
                            <span>{{val.filmType.name}}</span>
                        </p>
                        <p></p>
                        <p>
                            主演：
                            <template v-if="val.actors">
                                <span v-for="(actor,ind) in val.actors" :key="ind">
                                    {{actor.name}}  
                                </span>
                            </template>
                            <template v-else>
                                <span>
                                    暂无主演
                                </span>
                            </template>
                        </p>
                        <p>
                            <!-- <span>上映日期:</span><span>{{val.timeType==1? new Date(val.premiereAt*1000).getFullYear()+"待定": val.timeType==2? new Date(val.premiereAt*1000).getFullYear()+"待定": ""}}</span> -->
                            <span>上映日期：</span><span>{{showTime(val.premiereAt,val.timeType)}}</span>
                        </p>
                    </div>
                    <div class="btn" v-if="val.isPresale">
                        <span>预购</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "commingsoon",
    data(){
        return {
            data: [],
            isCanScroll: true,
            num: 2
        }
    },
    created() {
        this.getData()
    },
    methods: {
        async getData(){
            let res = await this.$http.get('/comingSoon1');
            this.data = res.data.data.films;
            console.log(this.data[0])
            this.total = res.data.data.total;
        },
        showTime(time,type){
            switch(type){
                case 1: 
                    return  new Date(time*1000).getFullYear()+"待定"
                    break;
                case 2:
                    return new Date(time * 1000).getFullYear()+"年"+Number(new Date(time * 1000).getMonth()+1)+"月 待定"
                    break;
                case 3:
                    let arr = ["周日","周一","周二","周三","周四","周五","周六"];
                    let week = arr[new Date(time * 1000).getDay()];
                    if(new Date(time*1000).getFullYear() !== new Date().getFullYear()){
                        return week+" "+new Date(time*1000).getFullYear()+"年"+Number(new Date(time * 1000).getMonth()+1)+"月"+new Date(time * 1000).getDate()+"日"
                    }
                    return week+" "+Number(new Date(time * 1000).getMonth()+1)+"月"+new Date(time * 1000).getDate()+"日"
                    break;
           }
        }
    },
     mounted() {
        window.onscroll = (ev)=>{
            var bigH =  document.querySelector("#app").clientHeight;    //可滚动容器的高度
            var screenH = document.documentElement.clientHeight;          //屏幕尺寸高度
            var overflowH = document.documentElement.scrollTop;           //可滚动容器超出屏幕尺寸高度
            if(bigH < screenH+overflowH+50 && this.isCanScroll){         //到底了
                if(this.data.length<this.total){                         //data的数组长度<总条数则继续获取数据
                    this.isCanScroll = false;    
                    this.$http.get("/comingSoon"+(this.num++)).then((res)=>{
                        this.data =  this.data.concat(res.data.data.films)
                        this.total = res.data.data.total;   //总条数
                        this.isCanScroll = true;
                    })
                }else{
                    console.log("没有更多数据了");
                }
            }
        }
        /**
         * 如果bigH<screenH+overflowH   说明到底部了
         * this.isCanScroll     定义是否可以滚动(到底部之后,将该数据设置为false,则到底部也不会获取数据,避免了429(过多请求))
         * this.data.length<this.total  获取到数据里面的total总条数,判断data里面的数组长度是否<总条数,是则继续获取下一页, 否则不再获取
        */
    }
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
                        display: flex;
                        align-items: center;
                        &:first-child{
                            font-size: 16px;
                            color: #333;
                            span{
                                &:nth-child(1){
                                    display: inline-block;
                                    max-width: 180px;
                                    overflow: hidden;
                                    text-overflow:ellipsis;
                                    white-space:nowrap;
                                }
                                &:nth-child(2){
                                    color: #fff;
                                    background-color: #D2D6DC;
                                    padding: 0 3px;
                                    font-size: 12px;
                                    border-radius: 3px;
                                    margin-left: 5px;
                                }
                            }
                        }
                        &:nth-child(2) {
                            width: 209px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                            span{
                                color: #FFB232;
                                margin-left: 5px;
                            }
                        }
                        &:nth-child(3) {
                            display: block;
                            width: 209px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
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

