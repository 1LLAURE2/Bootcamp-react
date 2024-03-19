/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup


// importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
// importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/init.js');

// importScripts('https://gstatic.com/firebase/9.2.0/firebase-app-compat.js');
// importScripts('https://gstatic.com/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('https://gstatic.com/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
});

const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options


/*
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Titulo de la notificacion';
  const notificationOptions = {
    body: 'Este es el body.',
    icon: './Iconshock-Dragonball-Dragonball-3.ico'
  };
  // firebase-logo.png
  // https://www.iconarchive.com/download/i18371/iconshock/dragonball/dragonball-4.ico
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

*/




