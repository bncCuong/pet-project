// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: 'AIzaSyAxaTAvXlh8wZR8TNM4zq7P0N9ra0HQbow',
    // authDomain: 'pet-project-dab6c.firebaseapp.com',
    // projectId: 'pet-project-dab6c',
    // storageBucket: 'pet-project-dab6c.appspot.com',
    // messagingSenderId: '994954034675',
    // appId: '1:994954034675:web:b168f6d9742666112fe686',
    // measurementId: 'G-QGSW0Q9Y73',
    apiKey: 'AIzaSyAxaTAvXlh8wZR8TNM4zq7P0N9ra0HQbow',
    authDomain: 'my-pet-project-28c51.firebaseapp.com',
    projectId: 'my-pet-project-28c51',
    storageBucket: 'my-pet-project-28c51.appspot.com',
    messagingSenderId: '24203347862',
    appId: '1:24203347862:web:242458c963eff28a4e3fb7',
    measurementId: 'G-10M1N4WZZB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
