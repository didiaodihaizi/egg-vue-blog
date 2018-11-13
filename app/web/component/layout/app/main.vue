<template>
   <div>
     <LayoutHeader></LayoutHeader>
     <div slot="content"><slot name="main"></slot></div>
   </div>
</template>
<style>
</style>
<script type="text/babel">
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  export default{
    components: {
      LayoutHeader,
      LayoutContent
    }
  }
</script>
