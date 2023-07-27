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
      description: '',
      parameter: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      botResponseFiles: {
        botResponseId: 2,
        filename: 'Programa Tecnicatura Universitaria en informatica',
        description:
          'Archivo en formato pdf del programa de la carrera Tec. Univ. en informatica',
        url: 'http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf',
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
        url: 'http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf',
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
