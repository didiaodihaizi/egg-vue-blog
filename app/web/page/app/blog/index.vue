<template>
    <div class="blog">
        <div class="blog-top">
            <img :src="require('web/asset/images/list/banner-老婆.jpeg')">
        </div>
        <div class="blog-content">
            <ul class="list">
                <li class="item" v-for="(item, index) in list" :key="index">
                    <div class="item-left">
                        <img :src="item.img_url">
                    </div>
                    <div class="item-right">
                        <h4 class="item-title">{{ item.title }}</h4>
                        <p class="item-intro">{{ item.summary }}</p>
                        <div class="right-footer">
                            <span>{{ item.time }}</span>
                            <span class="item-times">{{ item.hits }}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="components">
                <album :photos="list"></album>
                <div class="rank-components">
                    <ranks></ranks>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import album from './components/album'
import ranks from './components/rank'
import blogApi from 'web/api/blog'
export default {
    data () {
        return {
            list: [
                { title: '测试标题', intro: '预览带我去解开啊实打实打算大家按时来到喀山看来大家奥卡拉圣诞节可拉斯基的可拉斯基的可拉斯基的可拉斯基的可拉斯基的看来阿散井德里克氨基酸了简历库', time: '2018-09-01', times: 121, img_url: require('web/asset/images/list/列表-老婆.jpeg')},
                { title: '测试标题', intro: '预览带我去解asdasdasd开了简历库', time: '2018-09-01', times: 121, img_url: require('web/asset/images/list/列表-老婆.jpeg')},
                { title: '测试标题', intro: '预览带我去解开了简历库', time: '2018-09-01', times: 121, img_url: require('web/asset/images/list/列表-老婆.jpeg')}
            ]
        }
    },
    components: {
        album,
        ranks
    },
    mounted () {
        blogApi.getArticleList().then(res => {
            this.list = res.list
        })
    }
}
</script>

<style lang="scss" scoped>
.blog {
    width: 100%;
    .blog-top {
        height: 500px;
        img {
            width: 100%;
        }
    }
    .blog-content {
        width: 1200px;
        margin: 20px auto;
        background: #fefefe;
        display: flex;
        .list {
            width: 880px;
            margin-right: 20px;
            .item {
                width: 880px;
                height: 300px;
                display: flex;
                border-radius: 15px;
                margin-bottom: 20px;
                box-shadow: 0 1px 20px -8px rgba(0,0,0,.5);
                text-shadow: 0 0 1px rgba(0,0,0,.1);
                cursor: pointer;
                transition: all .3s linear;
                &:hover {
                    box-shadow: 0 1px 20px -8px rgba(39, 36, 36, 1);
                }
                .item-left {
                    width: 300px;
                    height: 100%;
                    img {
                        width: 100%;
                    }
                }
                .item-right {
                    padding: 20px;
                    flex: 1;
                    position: relative;
                    .item-title {
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .item-intro {
                        font-size: 14px;
                    }
                    .right-footer {
                        position: absolute;
                        bottom: 20px;
                        width: 540px;
                        .item-times {
                            float: right;
                        }
                    }
                }
            }
        }
        .components {
            flex: 1;
            .rank-components {
                margin-top: 20px;
            }
        }
    }
    
}
</style>
