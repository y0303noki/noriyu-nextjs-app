import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCa4fJbCeiROG08D07C3v7MK2TCI_rgJQc',
  authDomain: 'noriyu-dev.firebaseapp.com',
  projectId: 'noriyu-dev',
  storageBucket: 'noriyu-dev.appspot.com',
  messagingSenderId: '1013396303094',
  appId: '1:1013396303094:web:694f2f1e3406f8a38b50d7',
  measurementId: 'G-V7Q2TWKE5B',
};

// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成します
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
