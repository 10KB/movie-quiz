import { sample } from 'lodash';
import Movies from '~/movies';

export default {
  generate() {
    const movie = sample(Movies);
    return [
      {
        kind: 'multiple-choice',
        category: 'year',
        question: `In welk jaar kwam ${movie.title} uit?`,
        options: [movie.year, 1982, 1988, 1999],
        answer: movie.year,
      },
    ];
  },
};
