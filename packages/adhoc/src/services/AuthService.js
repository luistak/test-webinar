const MOCK_USER = 'master';
const MOCK_PASSWORD = '123123';
const MOCK_NAME = 'Fryo C Lynes';

export async function authenticate(user, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === MOCK_USER && MOCK_PASSWORD === password) {
        return resolve({ name: MOCK_NAME });
      } else reject(Error('Login not accepted'));
    }, 500);
  });
}
