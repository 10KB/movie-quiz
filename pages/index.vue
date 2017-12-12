<template>
  <main class="mq-intro">
    <img src="~/assets/images/logo.svg" height="64" />
    <input type="text" v-model="name" />
    <button @click="start">
      <img src="~/assets/images/right.svg" height="28" />
    </button>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
      };
    },

    methods: {
      start() {
        this.$store.commit('setName', this.name);
        this.$router.push('/quiz');
      }
    },
  };
</script>

<style lang="scss">
  .mq-intro {
    text-align: center;
  }
</style>
