// ----------------------------------------------------------------------

const account = {
  displayName: 'Raffael Fradio',
  email: 'raff.fradio@gmail.com ',
  photoURL: '/assets/images/avatars/avatar_12.jpg',
};

const accounts = [
  {
    displayName: "Kerri Good",
    photoURL: `/assets/images/avatars/avatar_${Math.ceil(Math.random() * 24)}.jpg`
  },
  {
    displayName: "Cameron Sanderson",
    photoURL: `/assets/images/avatars/avatar_${Math.ceil(Math.random() * 24)}.jpg`
  },
  {
    displayName: "Eileen Stacy",
    photoURL: `/assets/images/avatars/avatar_${Math.ceil(Math.random() * 24)}.jpg`
  },
  {
    displayName: "Jorja Bates",
    photoURL: `/assets/images/avatars/avatar_${Math.ceil(Math.random() * 24)}.jpg`
  },
  {
    displayName: "Jeremy Toft",
    photoURL: `/assets/images/avatars/avatar_${Math.ceil(Math.random() * 24)}.jpg`
  }
]

export default account;
export {accounts};
