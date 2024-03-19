// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging , getToken,onMessage} from "firebase/messaging";
import { getFirestore } from "firebase/firestore";


// const vapidKey="HxR7zcjzrSuqhfHiOCdtaHa0wP0HqNFlyu63RI5xzmw"
const vapidKey="BFOB23rv2vz8P90GbCoQG7oMKe6y9fPH5yn5968oIPJWAqb6gj13tUx4CPsgVIwsV0iTAsWDcWZxx5mV8KtVGuc"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxNkYUjHaj0n7DfWCFrnyv1e7g0XW10ls",
    authDomain: "fir-shopping-79433.firebaseapp.com",
    projectId: "fir-shopping-79433",
    storageBucket: "fir-shopping-79433.appspot.com",
    messagingSenderId: "131209313368",
    appId: "1:131209313368:web:6aa627f56ae73ab09c1e2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging();


getToken(messaging, { vapidKey})
    .then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            // console.log('Current Token',currentToken);
            sendTokenToServer(currentToken);
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });

const sendTokenToServer=token=>{
    if(localStorage.getItem("tokenSentToServer")){
        return 
    }
    
    localStorage.setItem("tokenSentToServer","1");
}

export const db = getFirestore(app);