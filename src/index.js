import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQOu-0HFlyPTYf4jzrXSJBbIoB4Nfb5rs",
  authDomain: "ecommerce-gamestore.firebaseapp.com",
  projectId: "ecommerce-gamestore",
  storageBucket: "ecommerce-gamestore.appspot.com",
  messagingSenderId: "414748128751",
  appId: "1:414748128751:web:5860f344f4f423b3e9f21a",
  measurementId: "G-YT5E4LC0KN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
