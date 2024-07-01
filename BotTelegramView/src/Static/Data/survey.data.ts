import { userTypesDataMock } from './userTypes.data';

export const surveyDataMock = [
  {
    surveyId: 1,
    questions: [
      {
        surveyId: 1,
        question: 'De manera general, ¿que horario de cursada preferis?',
        typeQuestion: 'Basica',
        description: 'el alumno debera elegir entre las franja horarias dadas',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        surveyId: 1,
        question: 'De manera breve, ¿por que preferis ese horario?',
        typeQuestion: 'Basica',
        description:
          'el alumno debera describir brevemente por que elgio tal franja horaria',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        surveyId: 1,
        question: '¿Cual es tu ocupacion?',
        typeQuestion: 'Basica',
        description: 'el alumno debera describir su ocupacion',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
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
    questions: [
      {
        surveyId: 2,
        question:
          'del 1 al 10,¿Que puntuacion le pondrias a la cursada de la materias en general?',
        typeQuestion: 'Abierta',
        description: 'el alumno debera elegir una puntuacion',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        surveyId: 2,
        question: '¿Cual fue la materia mas interesante?',
        typeQuestion: 'Abierta',
        description: 'el alumno debera elegir una materia de la cursada',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        surveyId: 2,
        question: '¿Cual fue la materia menos interesante?',
        typeQuestion: 'Abierta',
        description: 'el alumno debera elegir una materia de la cursada',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
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
    questions: [
      {
        surveyId: 3,
        question:
          'del 1 al 10,¿Que puntuacion le pondrias a la cursada de la materias en general?',
        typeQuestion: 'Abierta',
        description: 'el alumno debera elegir una puntuacion',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        surveyId: 3,
        question: '¿Cual fue la materia mas interesante?',
        typeQuestion: 'Abierta',
        description: 'el alumno debera elegir una materia de la cursada',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        surveyId: 3,
        question: '¿Cual fue la materia menos interesante?',
        typeQuestion: 'Abierta',
        description: 'el alumno debera elegir una materia de la cursada',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
    name: 'Opinion de cursada',
    userTypeId: 2,
    userType: userTypesDataMock[1],
    description:
      'Los docentes podran opinar de manera sobre la cursada y dar sugerencias ',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
