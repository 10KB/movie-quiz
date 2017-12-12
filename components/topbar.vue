<template>
  <nav class="mq-topbar">
    {{ name }}
  </nav>
</template>

<script>
  export default {
    name: 'mq-topbar',

    props: ['name'],
  };
</script>

<style lang="scss">
  .mq-topbar {
    border-bottom: 1px solid black;
    line-height: 54px;
    padding: 0 30px;
  }
</style>
