importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);




const firebaseConfig = {
    apiKey: "AIzaSyC02zhjyigI6Vr-tOQZ78Ihu18-PYR2EaI",
    authDomain: "anchor-travels.firebaseapp.com",
    projectId: "anchor-travels",
    storageBucket: "anchor-travels.appspot.com",
    messagingSenderId: "408140811666",
    appId: "1:408140811666:web:0e35fd93d3426cacd6854b"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});