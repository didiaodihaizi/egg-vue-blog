<template>
    <div class="album">
        <ul class="album-list">
            <li class="album-item" v-for="(item, index) in photos" :key="index" v-if="showIndex <= index">
                <img :src="item.img_url">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        photos: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            showIndex: 0
        }
    },
    methods: {
        next () {
           this.showIndex++ 
        },
        preforward () {
            this.showIndex--
        }
    }
}
</script>

<style lang="scss" scoped>
    .album {
        position: relative;
        width: 100%;
    }
    .album-list {
        width: 300px;
        height: 304px;
    }
    .album-item {
        position: absolute;
        top: 0;
        left: 0;
        
        img {
            width: 100%;
            border-radius: 10px;
        }
    }
</style>
