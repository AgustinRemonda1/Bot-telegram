import Cookie from 'js-cookie';

export const getCookieValue = (name: any) => {
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

export const setCookieValue = (name: any, value: any) => {
  try {
    Cookie.set(name, value);
  } catch {}
};

export const removeCookieValue = (name: any) => {
  try {
    Cookie.remove(name);
  } catch {}
};
