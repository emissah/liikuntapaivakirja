import React from 'react';
import ReactDOM from 'react-dom/';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyD3eqYWmTSm1c4mnfWfuo6NjgSbz7xYg5c",
  authDomain: "liikuntapaivakirja-a2147.firebaseapp.com",
  projectId: "liikuntapaivakirja-a2147",
  storageBucket: "liikuntapaivakirja-a2147.appspot.com",
  messagingSenderId: "979736012821",
  appId: "1:979736012821:web:30f9700bb7ede60ae4461c"
};


//const root = document.getElementById('root');
//ReactDOM.render(
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    //<App /> </FirebaseAppProvider>, root 
// );

ReactDOM.render(
<React.StrictMode>
<FirebaseAppProvider firebaseConfig={firebaseConfig}>
<App /> </FirebaseAppProvider>
</React.StrictMode>, document.getElementById("root")
);


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //  <App />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
