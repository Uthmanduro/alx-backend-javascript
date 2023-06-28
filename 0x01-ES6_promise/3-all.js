import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((result) => {
    createUser().then((res) => {
      const firstname = res.firstName;
      const lastname = res.lastName;
      console.log(result.body, firstname, lastname);
    }).catch(() => console.error('Signup system offline'));
  }).catch(() => console.error('Signup system offline'));
}
