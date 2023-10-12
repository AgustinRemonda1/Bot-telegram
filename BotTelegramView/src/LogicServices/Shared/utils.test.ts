import { validator, searchAttribute } from './utils';

describe('sharedUtils', () => {
  it('has every attributes', async () => {
    const validation = validator(
      { name: 'nombre', description: 'description', email: 'email@email.com' },
      ['name', 'description', 'email']
    );

    expect(validation).toBeTruthy();
  });

  it('missing attributes', async () => {
    const validation = validator(
      { name: '', description: 'description', email: '' },
      ['name', 'description', 'email']
    );

    expect(validation).toBeFalsy();
  });

  it('validate nested attributte', async () => {
    const validation = validator(
      {
        person: {
          name: 'Andrew',
          lastName: 'Doe'
        }
      },
      ['person.name', 'person.lastName']
    );

    expect(validation).toBeTruthy();
  });

  it('search attribute', async () => {
    const attribute = searchAttribute(
      {
        person: {
          name: 'Andrew',
          lastName: 'Doe'
        }
      },
      'person.lastName'
    );

    expect(attribute).toEqual('Doe');
  });

  it('search attribute(complicatted form)', async () => {
    const attribute = searchAttribute(
      {
        data: {
          person: {
            city: {
              postalCode: '1734b'
            }
          }
        }
      },
      'data.person.city.postalCode'
    );

    expect(attribute).toEqual('1734b');
  });
});
