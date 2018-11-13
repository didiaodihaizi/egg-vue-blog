<template>
    <div class="rank">
        <h5>阅读排行榜</h5>
        <ul>
            <li v-for="(item, index) in ranks" :key="index">
                <div class="rank-item__content">
                    <div class="rank-item__content--title">{{ item.title }}</div>
                    <div class="rank-item__content--tip">
                        <span>{{ item.publish_time }}</span>
                        <span>{{ item.views }}</span>
                    </div>
                </div>
                <span>
                    <img :src="item.img_url">
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ranks: [
                { title: '第一名哈哈哈哈', publish_time: '2018-11-05', views: 12, img_url: require('web/asset/images/list/列表-老婆.jpeg')},
                { title: '第二名哈哈哈哈', publish_time: '2018-11-05', views: 12, img_url: require('web/asset/images/list/列表-老婆.jpeg')},
                { title: '第三名嘤嘤嘤', publish_time: '2018-11-05', views: 12, img_url: require('web/asset/images/list/列表-老婆.jpeg')},
                { title: '第一名哈哈哈哈', publish_time: '2018-11-05', views: 12, img_url: require('web/asset/images/list/列表-老婆.jpeg')},
                { title: '第一名哈哈哈哈', publish_time: '2018-11-05', views: 12, img_url: require('web/asset/images/list/列表-老婆.jpeg')}
            ]
        }
    }    
}
</script>

<style lang="scss" scoped>
.rank {
    border-radius: 20px;
    // background: #fff;
    h5 {
        font-size: 18px;
        line-height: 40px;
        font-weight: normal;
        border-bottom: 1px dotted #333;
        padding: 0 10px;
        margin-bottom: 20px;
    }
    li {
        height: 80px;
        background: hsla(0,0%,96%,.8);
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        z-index: 3;
        margin-bottom: 20px;
        border-radius: 10px;
        .rank-item__content {
            flex: 1;
            font-size: 14px;
            position: relative;
            &--tip {
                position: absolute;
                bottom: 0;
                font-size: 12px;
            }
        }
        img {
            width: 60px;
            height: 60px;
            border-radius: 5px;
            z-index: 4;
        }
    }
}
</style>

