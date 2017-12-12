<template>
  <main>
    <mq-topbar :name="name" />
    <mq-multiple-choice :question="questions[0]" />
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MqTopbar from '~/components/topbar';
  import MqMultipleChoice from '~/components/multiple-choice';

  export default {
    computed: {
      ...mapGetters(['name', 'questions']),
    },

    components: {
      MqTopbar,
      MqMultipleChoice,
    },
  };
</script>

<style lang="scss">
</style>
