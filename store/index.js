import QuestionGenerator from '~/lib/question-generator';

export default {
  state() {
    return {
      name: 'Ronald',
      questions: QuestionGenerator.generate(),
    };
  },

  mutations: {
    setName(state, val) {
      state.name = val;
    },
  },

  getters: {
    name: state => state.name,
    questions: state => state.questions,
  },
};
