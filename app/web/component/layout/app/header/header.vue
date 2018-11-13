<template>
    <div class="header">
        <span class="logo"></span>
        <ul class="nav">
            <li v-for="(item, index) in nvaList" :key="index" @click="$router.push(item.route)">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                nvaList: [
                    {
                        name: '主页',
                        route: '/'
                    },
                    {
                        name: '博客',
                        route: '/blog'
                    },
                    {
                        name: '小工具',
                        route: '/tools'
                    },
                    {
                        name: '拔刀',
                        route: '/gakki'
                    },
                    {
                        name: '简历',
                        route: '/resume'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        height: 70px;
        line-height: 70px;
        z-index: 2;
        position: fixed;
        top: 0;
        width: 100%;
        opacity: .7;
        padding-right: 100px;
        transition: all .3s linear;
        &:hover {
          background: #fff;
        }
        .logo {
            float: left;
        }
        .nav {
            float: right;
            li {
                float: left;
                width: 60px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                &:hover {
                  color: orange;
                }
            }
        }
    }
</style>
