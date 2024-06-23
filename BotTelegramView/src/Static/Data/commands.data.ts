import { commandTypesDataMock } from './commandTypes.data';
import { userTypesDataMock } from './userTypes.data';

export const commandsDataMock = [
  {
    botCommandId: 1,
    userTypeId: 3,
    commandTypeId: 13,
    telCommand: 'Ayuda',
    name: 'Ayuda',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    botResponses: {
      botResponseId: 1,
      botId: 1,
      response: 'Los comandos disponibles, son: ',
      description: 'muestra los comandos disponibles',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    commandType: {
      commandTypeId: 13,
      type: 'Help',
      name: 'Comando de ayuda',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 2,
    userTypeId: 1,
    commandTypeId: 1,
    telCommand: 'Plan_de_estudio',
    name: 'Plan de estudio',
    description: '',
    status: true,
    userType: userTypesDataMock[0],
    botResponses: {
      botResponseId: 2,
      botId: 2,
      response: 'plan de estudios Tec.universitaria en informatica',
      description: 'plan de estudios Tec.universitaria en informatica',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      botResponseFiles: {
        botResponseId: 2,
        filename: 'Programa Tecnicatura Universitaria en informatica',
        description:
          'Archivo en formato pdf del programa de la carrera Tec. Univ. en informatica',
        file: 'data:image/jpeg;base64,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ScT+pHuINr2PNfrJdi1DADQR/wCuvttv/ZX223/sr7bb/wBlfbbf+LLIfs/1Fi6NR/8AtH//2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNvd/ffJ/wA/HnHzzzzzzzzzzzzzzz9KsOqBzQBzzwxz3Tzzzzzzzzzzzzz+qzTzx7Dzzzzzzy277zzzzzzzzzyfSzRDTyy7zzzzzzzzw53zzzzzzzzznDQ4yxJOv7rKe/r6Jb5+3H/zzzzzy3byYzjTgSxDDzzzzzzyjTyhTbzzzwW7RTzzwjjjzwjzzzzzzyxSTTTfzzzl47jzzyzihjzzzjDTzzzzxShYDzzy2f6ihDSjibT7gTADKxxzz7TwhV3zz6SAiziixxLKoiCSq5LzzzSDiRzfzzy2jnyxDwzJPbzzzzzziRyzyyhLzzzzzy1TfyyibLbzzzxTLTjTDQSLX7zzzzzzx9PzyA4rDTwiCuwLk7u3/wA888888888t41888MssMs8yve8888888888888888U888888888+888888888888888888U888888888+888888888888888888+888888888+8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//EACoRAAECAgoDAQADAQAAAAAAAAEAESExMEBBUXGRobHR8CBh4cEQYHCB/9oACAEDAQE/EP7xJDpq1kr4NjDdMtAd9Apiej6E145fUDbBT3Tn8T3TmOExWka8J2WYcOnL2HE6gQmClc/HXUwPSWUW+agTB2fWpgySUWlb1npyE4V5A6fNsEQmNHjtnP8Az9qQEGQsAjHH7zRQD0bx2aplKCeYGwjoeVHO/eydEEmPntDYVYCDGI992TS4HT52KKbHxia8BpD8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',
        extension: '.pdf',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    },
    commandType: commandTypesDataMock[0],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 3,
    userTypeId: 1,
    commandTypeId: 2,
    telCommand: 'Ubicacion',
    name: 'Ubicacion',
    description: '',
    status: true,
    userType: userTypesDataMock[0],
    commandType: commandTypesDataMock[1],
    botResponses: {
      botResponseId: 3,
      botId: 3,
      response: 'Ubicación de la universidad',
      description: 'Ubicación de la universidad',
      parameter: '-34.618246,-58.637199',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 4,
    userTypeId: 3,
    commandTypeId: 6,
    telCommand: 'Start',
    name: 'Start',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    commandType: {
      commandTypeId: 6,
      type: 'Start',
      name: 'Empezar',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    botResponses: {
      botResponseId: 4,
      botId: 4,
      response: `
        ¡Bienvenido al botTestUnahur!

        Características (por ahora):
        - Ubicacion de la unahur
        - Programas de carreras
        - Oferta Academica
        - Encuestas
        Recorda que tenes que registrarte para acceder a diferentes 
        acciones!

        *Primero te pido que te registres, podes hacerlo
         apretando aca /Registrarme o escribiendo el comando.
      
        *Escribe /Ayuda para ver los comando disponibles
      `,
      description: 'Comando iniciar muestra una serie de comandos disponibles',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 5,
    userTypeId: 3,
    commandTypeId: 5,
    telCommand: 'Registrarme',
    name: 'Registrarme',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    commandType: {
      commandTypeId: 5,
      type: 'Registration',
      name: 'Registracion',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    botResponses: {
      botResponseId: 5,
      botId: 5,
      response: 'Por favor, enviame tu numero para configurar tu usuario.',
      description: 'Envio de numero de usuario',
      parameter: 'Enviar mi numero',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 6,
    userTypeId: 3,
    commandTypeId: 10,
    telCommand: 'Contacto',
    name: 'Contacto',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    commandType: {
      commandTypeId: 10,
      type: 'Contact',
      name: 'Contacto',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    botResponses: {
      botResponseId: 6,
      botId: 6,
      response: `
        Genial, pudimos verificar tu perfil y quedo de la siguiente manera 
        NOMBRE   ---> :name
        APELLIDO ---> :lastname
        TELEFONO ---> :phone_number
        PERFIL   ---> :user_type
        
        Podes ver las funcionalidades que tenes con /Ayuda
      `,
      description: 'Se manda al usuario como quedo su perfil',
      parameter: 'Enviar mi numero',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 7,
    userTypeId: 1,
    commandTypeId: 4,
    telCommand: 'Mail_de_bienvenida',
    name: 'Mail de bienvenida',
    description: '',
    status: true,
    userType: userTypesDataMock[1],
    commandType: commandTypesDataMock[3],
    botResponses: {
      botResponseId: 7,
      botId: 7,
      response: 'Mail de bienvenida al bot telegram de la UNAHUR.',
      description: 'se le pide al usuario que ingrese un mail',
      parameter: 'Bienvenido al bot telegram UNAHUR',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 8,
    userTypeId: 3,
    commandTypeId: 9,
    telCommand: 'Carreras',
    name: 'Carreras',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    commandType: commandTypesDataMock[6],
    botResponses: {
      botResponseId: 8,
      botId: 8,
      response: 'Las carreras disponibles son: ',
      description: 'botones con las carreras',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    botNestedCommands: [
      {
        botCommand: {
          botCommandId: 9,
          userTypeId: 3,
          commandTypeId: 7,
          telCommand: 'Informatica',
          name: 'Informatica',
          description: '',
          status: true,
          userType: userTypesDataMock[2],
          commandType: commandTypesDataMock[4],
          botResponses: {
            botResponseId: 9,
            botId: 9,
            response:
              'La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.',
            description: 'Descripcion de la carrera Informatica',
            parameter: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      {
        botCommand: {
          botCommandId: 10,
          userTypeId: 3,
          commandTypeId: 7,
          telCommand: 'Fisica',
          name: 'Fisica',
          description: '',
          status: true,
          userType: userTypesDataMock[2],
          commandType: commandTypesDataMock[4],
          botResponses: {
            botResponseId: 10,
            botId: 10,
            response:
              'La Carrera de Física es una disciplina que se encarga del estudio de la materia, la energía y el movimiento, como también de sus interacciones. Tiene como objetivo conocer al universo y comprender los diferentes fenómenos que en él se manifiestan.',
            description: 'Descripcion de la carrera Fisica',
            parameter: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      {
        botCommand: {
          botCommandId: 11,
          userTypeId: 3,
          commandTypeId: 7,
          telCommand: 'Quimica',
          name: 'Quimica',
          description: '',
          status: true,
          userType: userTypesDataMock[2],
          commandType: commandTypesDataMock[4],
          botResponses: {
            botResponseId: 11,
            botId: 11,
            response:
              'La Licenciatura en Química forma profesionales capaces para trabajar con sustancias químicas de cualquier tipo y desarrollar trabajos de investigación y tecnológicos en el área. Los Licenciados en Química pueden desempeñarse en laboratorios, industrias y oficinas científico-técnicas.',
            description: 'Descripcion de la carrera Lic. Quimica',
            parameter: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 9,
    userTypeId: 3,
    commandTypeId: 7,
    telCommand: 'Informatica',
    name: 'Informatica',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    commandType: commandTypesDataMock[4],
    botResponses: {
      botResponseId: 9,
      botId: 9,
      response:
        'La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.',
      description: 'Descripcion de la carrera Informatica',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 10,
    userTypeId: 3,
    commandTypeId: 7,
    telCommand: 'Fisica',
    name: 'Fisica',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    commandType: commandTypesDataMock[4],
    botResponses: {
      botResponseId: 10,
      botId: 10,
      response:
        'La Carrera de Física es una disciplina que se encarga del estudio de la materia, la energía y el movimiento, como también de sus interacciones. Tiene como objetivo conocer al universo y comprender los diferentes fenómenos que en él se manifiestan.',
      description: 'Descripcion de la carrera Fisica',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 11,
    userTypeId: 3,
    commandTypeId: 7,
    telCommand: 'Quimica',
    name: 'Quimica',
    description: '',
    status: true,
    userType: userTypesDataMock[2],
    commandType: commandTypesDataMock[4],
    botResponses: {
      botResponseId: 11,
      botId: 11,
      response:
        'La Licenciatura en Química forma profesionales capaces para trabajar con sustancias químicas de cualquier tipo y desarrollar trabajos de investigación y tecnológicos en el área. Los Licenciados en Química pueden desempeñarse en laboratorios, industrias y oficinas científico-técnicas.',
      description: 'Descripcion de la carrera Lic. Quimica',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 12,
    userTypeId: 1,
    commandTypeId: 11,
    telCommand: 'Mail_de_plan_de_estudio',
    name: 'Mail de plan de estudio',
    description: '',
    status: true,
    userType: userTypesDataMock[0],
    commandType: commandTypesDataMock[7],
    botResponses: {
      botResponseId: 12,
      botId: 12,
      response: 'Plan de estudio de informatica.',
      description: 'Se manda al usuario un mail con el pdf del programa',
      parameter:
        'http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      botResponseFiles: {
        botResponseId: 12,
        filename: 'Programa Tecnicatura Universitaria en informatica',
        description:
          'Archivo en formato pdf del programa de la carrera Tec. Univ. en informatica',
        file: 'data:image/jpeg;base64,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ScT+pHuINr2PNfrJdi1DADQR/wCuvttv/ZX223/sr7bb/wBlfbbf+LLIfs/1Fi6NR/8AtH//2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNvd/ffJ/wA/HnHzzzzzzzzzzzzzzz9KsOqBzQBzzwxz3Tzzzzzzzzzzzzz+qzTzx7Dzzzzzzy277zzzzzzzzzyfSzRDTyy7zzzzzzzzw53zzzzzzzzznDQ4yxJOv7rKe/r6Jb5+3H/zzzzzy3byYzjTgSxDDzzzzzzyjTyhTbzzzwW7RTzzwjjjzwjzzzzzzyxSTTTfzzzl47jzzyzihjzzzjDTzzzzxShYDzzy2f6ihDSjibT7gTADKxxzz7TwhV3zz6SAiziixxLKoiCSq5LzzzSDiRzfzzy2jnyxDwzJPbzzzzzziRyzyyhLzzzzzy1TfyyibLbzzzxTLTjTDQSLX7zzzzzzx9PzyA4rDTwiCuwLk7u3/wA888888888t41888MssMs8yve8888888888888888U888888888+888888888888888888U888888888+888888888888888888+888888888+8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//EACoRAAECAgoDAQADAQAAAAAAAAEAESExMEBBUXGRobHR8CBh4cEQYHCB/9oACAEDAQE/EP7xJDpq1kr4NjDdMtAd9Apiej6E145fUDbBT3Tn8T3TmOExWka8J2WYcOnL2HE6gQmClc/HXUwPSWUW+agTB2fWpgySUWlb1npyE4V5A6fNsEQmNHjtnP8Az9qQEGQsAjHH7zRQD0bx2aplKCeYGwjoeVHO/eydEEmPntDYVYCDGI992TS4HT52KKbHxia8BpD8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',
        extension: '.pdf',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 13,
    userTypeId: 1,
    commandTypeId: 12,
    telCommand: 'Encuestas',
    name: 'Encuestas',
    status: true,
    description: '',
    userType: userTypesDataMock[0],
    commandType: {
      commandTypeId: 12,
      type: 'Poll',
      name: 'Encuestas',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    botResponses: {
      botResponseId: 13,
      botId: 13,
      response: '',
      description: '',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    botCommandId: 14,
    userTypeId: 3,
    commandTypeId: 8,
    telCommand: 'Lista_de_carreras',
    name: 'Lista de carreras',
    description: '',
    status: true,
    userType: userTypesDataMock[0],
    commandType: commandTypesDataMock[5],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    botResponses: {
      botResponseId: 14,
      botId: 14,
      response: 'Las carreras disponibles son: ',
      description: 'Lista con las carreras',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    botNestedCommands: [
      {
        botCommand: {
          botCommandId: 9,
          userTypeId: 3,
          commandTypeId: 7,
          telCommand: 'Informatica',
          name: 'Informatica',
          description: '',
          status: true,
          userType: userTypesDataMock[2],
          commandType: commandTypesDataMock[4],
          botResponses: {
            botResponseId: 9,
            botId: 9,
            response:
              'La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.',
            description: 'Descripcion de la carrera Informatica',
            parameter: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      {
        botCommand: {
          botCommandId: 10,
          userTypeId: 3,
          commandTypeId: 7,
          telCommand: 'Fisica',
          name: 'Fisica',
          description: '',
          status: true,
          userType: userTypesDataMock[2],
          commandType: commandTypesDataMock[4],
          botResponses: {
            botResponseId: 10,
            botId: 10,
            response:
              'La Carrera de Física es una disciplina que se encarga del estudio de la materia, la energía y el movimiento, como también de sus interacciones. Tiene como objetivo conocer al universo y comprender los diferentes fenómenos que en él se manifiestan.',
            description: 'Descripcion de la carrera Fisica',
            parameter: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      {
        botCommand: {
          botCommandId: 11,
          userTypeId: 3,
          commandTypeId: 7,
          telCommand: 'Quimica',
          name: 'Quimica',
          description: '',
          status: true,
          userType: userTypesDataMock[2],
          commandType: commandTypesDataMock[4],
          botResponses: {
            botResponseId: 11,
            botId: 11,
            response:
              'La Licenciatura en Química forma profesionales capaces para trabajar con sustancias químicas de cualquier tipo y desarrollar trabajos de investigación y tecnológicos en el área. Los Licenciados en Química pueden desempeñarse en laboratorios, industrias y oficinas científico-técnicas.',
            description: 'Descripcion de la carrera Lic. Quimica',
            parameter: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    ]
  }
];
