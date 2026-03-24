import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_8Ygs2gcWHkFAh1bPp-Kl8_yEwTBUe34",
    authDomain: "bionix-6b069.firebaseapp.com",
    projectId: "bionix-6b069",
    storageBucket: "bionix-6b069.firebasestorage.app",
    messagingSenderId: "744550572895",
    appId: "1:744550572895:web:5c9680138612bc43820cea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

