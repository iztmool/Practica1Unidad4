import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyBwpVRIZu86wm412_xahiZJvC-OHkLEGaA",
    authDomain: "practica-1-unidad-4.firebaseapp.com",
    projectId: "practica-1-unidad-4",
    storageBucket: "practica-1-unidad-4.appspot.com",
    messagingSenderId: "279238799866",
    appId: "1:279238799866:web:eb85d478b6c32df4edf443",
    measurementId: "G-T77BB588J1"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;