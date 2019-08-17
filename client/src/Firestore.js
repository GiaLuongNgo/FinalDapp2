import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyASjUBiqc4cNuY8HE3CCuRaBtmo340vepU",
    authDomain: "auction-house-51bcc.firebaseapp.com",
    databaseURL: "https://auction-house-51bcc.firebaseio.com",
    projectId: "auction-house-51bcc",
    storageBucket: "",
    messagingSenderId: "90009409762",
    appId: "1:90009409762:web:bcb1d3aaac42c875"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;