import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCI6lavv8LxsNclpR8MnmWtneLRLpmKin8",
    authDomain: "fir-sbs-4a43a.firebaseapp.com",
    projectId: "fir-sbs-4a43a",
    storageBucket: "fir-sbs-4a43a.firebasestorage.app",
    messagingSenderId: "992549849526",
    appId: "1:992549849526:web:42ee7e8b238c24a2d25917",
    measurementId: "G-31P62F8X2Z",
  databaseURL: "https://fir-sbs-4a43a-default-rtdb.firebaseio.com"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const app = initializeApp(firebaseConfig);