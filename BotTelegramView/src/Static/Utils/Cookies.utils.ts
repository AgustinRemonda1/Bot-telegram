import Cookie from 'js-cookie';

export const getCookieValue = (name: string) => {
  try {
    const serializedData = Cookie.get(name);
    if (!serializedData) {
      return undefined;
    }
    return serializedData;
  } catch (err) {
    return undefined;
  }
};

export const setCookieValue = (name: string, value: string | object) => {
  try {
    Cookie.set(name, value);
  } catch {}
};

export const removeCookieValue = (name: string) => {
  try {
    Cookie.remove(name);
  } catch {}
};
