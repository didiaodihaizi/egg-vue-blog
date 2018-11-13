<template>
    <div class="home">
        <video autoplay width="100%" controls loop  src="./../../../asset/vedio/home-1.mp4"></video>
        <notice></notice>
    </div>
</template>

<script>
import notice from './component/notice'
export default {
    components: {
        notice
    }
}
</script>

<style lang="scss" scoped>
    .home {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    
</style>


