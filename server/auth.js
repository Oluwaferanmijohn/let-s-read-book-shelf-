import {
    getAuth,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js';
import {
    getFirestore,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';
import {
    initializeApp,
} from 'https:/www.gstatic.com/firebasejs/9.9.2/firebase-app.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6GPMhLX3pXx61EuKMBoqdBjhJaNnfYGg",
    authDomain: "let-us-read-book-shelf.firebaseapp.com",
    projectId: "let-us-read-book-shelf",
    storageBucket: "let-us-read-book-shelf.appspot.com",
    messagingSenderId: "768463440548",
    appId: "1:768463440548:web:4aae1a52ca790d4041f431"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);





//  login in