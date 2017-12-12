<template>
  <div class="mq-multiple-choice">
    <h4>
      {{ question.question }}
    </h4>
    <button v-for="(option, i) in question.options" :key="i">
      {{ option }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'mq-multiple-choice',
    props: ['question'],
  };
</script>

<style lang="scss">
  .mq-multiple-choice {
    padding: 30px;

    h4 {
      margin-bottom: 50px;
    }

    button {
      width: 100%;
    }
  }
</style>
