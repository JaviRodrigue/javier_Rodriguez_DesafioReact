// Primer paso traer la libreria de React
import React from "react";
// Segundo paso traer la libreria de ReactDOM
import ReactDOM from "react-dom/client";

import App from "./components/NavBar";

import "./index.css";

// const App = () => "hola mundo que tal";

const ro = ReactDOM.createRoot(document.getElementById("root"));
ro.render(<App/>);








// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
