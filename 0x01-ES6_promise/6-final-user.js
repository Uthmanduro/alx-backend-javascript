import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo])
    .then((results) => {
      const arr = [];
      for (const result of results) {
        if (result.status === 'rejected') {
          const value = `${result.reason.name}: ${result.reason.message}`;
          arr.push({ status: result.status, value });
        } else {
          const { value } = result;
          arr.push({ status: result.status, value });
        }
      }
      return arr;
    });
}
