const MOCK_USER = 'master';
const MOCK_PASSWORD = '123123';
const MOCK_NAME = 'Fryo C Lynes';

export function authenticate(user, password) {
  if (user === MOCK_USER && MOCK_PASSWORD === password) {
    return Promise.resolve({
      name: MOCK_NAME
    });
  } else Promise.reject(Error('Login not accepted'));
}
