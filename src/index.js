import ReactDOM from "react-dom";

import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyAc-sxLK-LsASKXycPZGOdCj2437jhfrUs",
  authDomain: "kiei-personality-test.firebaseapp.com",
  projectId: "kiei-personality-test",
  storageBucket: "kiei-personality-test.appspot.com",
  messagingSenderId: "749359523404",
  appId: "1:749359523404:web:1431fe56a0177df18136e9",
  measurementId: "G-V9XPLT5D7W",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
