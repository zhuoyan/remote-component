<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DynamicCmp :remoteUrl="remoteUrl" />
  </div>
</template>

<script>
import DynamicCmp from '@/components/DynamicCmp';
export default {
  data() {
    return {
      remoteUrl: '/file/rollup.js',
    };
  },
  components: {
    DynamicCmp,
  },
};
</script>
