import { userTypesDataMock } from './userTypes.data';

export const surveyDataMock = [
  {
    surveyId: 1,
    questionResponse: {
      questionResponseId: 1,
      surveyId: 1,
      questions: [
        {
          questionId: 1,
          questionResponseId: 1,
          question: 'De manera general, ¿que horario de cursada preferis?',
          typeQuestion: 'Basica',
          description:
            'el alumno debera elegir entre las franja horarias dadas',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          questionId: 2,
          questionResponseId: 1,
          question: 'De manera breve, ¿por que preferis ese horario?',
          typeQuestion: 'Basica',
          description:
            'el alumno debera describir brevemente por que elgio tal franja horaria',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          questionId: 3,
          questionResponseId: 1,
          question: '¿Cual es tu ocupacion?',
          typeQuestion: 'Basica',
          description: 'el alumno debera describir su ocupacion',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    name: 'Definir horario de cursada',
    userTypeId: 1,
    userType: userTypesDataMock[0],
    description:
      'Los alumnos podran elegir un conjunto de horarios en caso que el profesor lo requiera(salir un poco antes y entrar mas temprano o lo contrario) ',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    surveyId: 2,
    questionResponse: {
      questionResponseId: 2,
      surveyId: 2,
      questions: [
        {
          questionId: 4,
          questionResponseId: 2,
          question:
            'del 1 al 10,¿Que puntuacion le pondrias a la cursada de la materias en general?',
          typeQuestion: 'Abierta',
          description: 'el alumno debera elegir una puntuacion',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          questionId: 5,
          questionResponseId: 2,
          question: '¿Cual fue la materia mas interesante?',
          typeQuestion: 'Abierta',
          description: 'el alumno debera elegir una materia de la cursada',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          questionId: 6,
          questionResponseId: 2,
          question: '¿Cual fue la materia menos interesante?',
          typeQuestion: 'Abierta',
          description: 'el alumno debera elegir una materia de la cursada',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    name: 'Opinion de cursada',
    userTypeId: 1,
    userType: userTypesDataMock[0],
    description:
      'Los alumnos podran opinar de manera NO ANONIMA sobre la cursada y dar sugerencias ',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    surveyId: 3,
    questionResponse: {
      questionResponseId: 3,
      surveyId: 3,
      questions: [
        {
          questionId: 7,
          questionResponseId: 3,
          question:
            'del 1 al 10,¿Que puntuacion le pondrias a la cursada de la materias en general?',
          typeQuestion: 'Abierta',
          description: 'el alumno debera elegir una puntuacion',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          questionId: 8,
          questionResponseId: 3,
          question: '¿Cual fue la materia mas interesante?',
          typeQuestion: 'Abierta',
          description: 'el alumno debera elegir una materia de la cursada',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          questionId: 9,
          questionResponseId: 3,
          question: '¿Cual fue la materia menos interesante?',
          typeQuestion: 'Abierta',
          description: 'el alumno debera elegir una materia de la cursada',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    name: 'Opinion de cursada',
    userTypeId: 2,
    userType: userTypesDataMock[1],
    description:
      'Los docentes podran opinar de manera sobre la cursada y dar sugerencias ',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const simpleSurveyDataMock = [
  {
    surveyId: 1,
    name: 'Definir horario de cursada',
    userTypeId: 1,
    userType: userTypesDataMock[0],
    description:
      'Los alumnos podran elegir un conjunto de horarios en caso que el profesor lo requiera(salir un poco antes y entrar mas temprano o lo contrario) ',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    surveyId: 2,
    name: 'Opinion de cursada',
    userTypeId: 1,
    userType: userTypesDataMock[0],
    description:
      'Los alumnos podran opinar de manera NO ANONIMA sobre la cursada y dar sugerencias ',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    surveyId: 3,
    name: 'Opinion de cursada',
    userTypeId: 2,
    userType: userTypesDataMock[1],
    description:
      'Los docentes podran opinar de manera sobre la cursada y dar sugerencias ',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const responsesDataMock = [
  {
    responsesId: 1,
    questionResponseId: 1,
    response: [
      {
        responseId: 1,
        questionId: 1,
        responsesId: 1,
        response: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        responseId: 2,
        questionId: 2,
        responsesId: 1,
        response: 'una',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        responseId: 3,
        questionId: 3,
        responsesId: 1,
        response: 'una',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    responsesId: 1,
    questionResponseId: 1,
    response: [
      {
        responseId: 1,
        questionId: 1,
        responsesId: 1,
        response: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        responseId: 2,
        questionId: 2,
        responsesId: 1,
        response: 'una',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        responseId: 3,
        questionId: 3,
        responsesId: 1,
        response: 'una',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    responsesId: 1,
    questionResponseId: 1,
    response: [
      {
        responseId: 1,
        questionId: 1,
        responsesId: 1,
        response: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        responseId: 2,
        questionId: 2,
        responsesId: 1,
        response: 'una',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        responseId: 3,
        questionId: 3,
        responsesId: 1,
        response: 'una',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
