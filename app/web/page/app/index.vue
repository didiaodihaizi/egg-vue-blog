<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <not-found v-if="isInRouter"></not-found>
      <router-view v-else></router-view>
    </transition>
  </Layout>
</template>
<script type="text/babel">
  import Layout from 'component/layout/app/index.vue';
  import notFound from './404'
  export default {
    components: {
      Layout,
      notFound
    },
    computed: {
      isInRouter () {
        return !this.$route.matched || this.$route.matched.length === 0;
      }
    },
    mounted(){

    }
  }
</script>
