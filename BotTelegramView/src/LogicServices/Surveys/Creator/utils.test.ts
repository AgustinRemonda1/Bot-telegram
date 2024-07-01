import { createArrayIterator, buildQuestions } from './utils';

describe('surveyUtils', () => {
  it('question initial object created when execute buildQuestions', async () => {
    const question = buildQuestions();

    const expected = {
      surveyId: '',
      question: '',
      description: ''
    };

    expect(question).toEqual(expected);
  });

  it('create an array iterator of ten size', async () => {
    const iterator = createArrayIterator(10);

    expect(iterator.length).toEqual(10);
  });

  it('create an array iterator of five size', async () => {
    const iterator = createArrayIterator(5);

    expect(iterator.length).toEqual(5);
  });
});
