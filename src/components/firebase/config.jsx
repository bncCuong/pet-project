// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDzT-NCEwJhmbTBQsuO9TY-RlN8dKOaI5A',
    authDomain: 'pet-project-dab6c.firebaseapp.com',
    projectId: 'pet-project-dab6c',
    storageBucket: 'pet-project-dab6c.appspot.com',
    messagingSenderId: '994954034675',
    appId: '1:994954034675:web:b168f6d9742666112fe686',
    measurementId: 'G-QGSW0Q9Y73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
