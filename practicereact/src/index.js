//var React = require('react');
//var ReactDOM = require('react-dom');


import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const name = "Dhruv Gupta";

const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/300";
const image3 = "https://picsum.photos/300/300";

ReactDOM.render(
    <>
        <h1 className={"heading"}>My name is {name}</h1>

        <div className={"img_div"}>
                <img src={image1} alt="Random Images"/>
                <img src={image2} alt="Random Images"/>
                <img src={image3} alt="Random Images"/>
        </div>
    </>,
    document.getElementById("root"));



// const firstName = "Dhruv";
// const lastName = "Gupta";

// const todayDate = Date.prototype.getDate();
// const todayTime = Date.prototype.getTime();

// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();
//
// ReactDOM.render(
//     <>
//         <h1>Hello, My name is {firstName} {lastName}</h1>
//         <p>current date is {currentDate}</p>
//         <p>current time is {currentTime}</p>
//         {/*<h1>My name is {firstName} {lastName}...</h1>*/}
//         {/*<p>My lucky number is { 2 + 3 }...</p>*/}
//     </>
//     , document.getElementById("root"));


// import React from "react"
// import ReactDOM from "react-dom"
//
// ReactDOM.render(
//     <>
//         <h1> Netflix Series </h1>
//         <p> List of 5 series... </p>
//         <ol>
//             <li>Dark</li>
//             <li>DDLJ</li>
//             <li>Dahan</li>
//             <li>Masti</li>
//             <li>Hey Shona</li>
//         </ol>
//     </> , document.getElementById("root"))

//import React from "react";
// import ReactDOM from "react-dom"

//ReactDOM.render('Kya dikhana hai (What to show..)', 'kaha dikhana hai (When to show..)', 'callback function');

//ReactDOM.render(
  //  <React.Fragment><h1>Hello World!!!</h1> <p> Hello world paragraph is here....</p> </React.Fragment> , document.getElementById("root"));

//ReactDOM.render(<><p>Netflix pack</p> <h1>List of 5 best series...</h1> </>, document.getElementById("root"));

// ReactDOM.render(
//     <div>
//         <h1>Hello World!!!</h1>
//         <p> Hello world paragraph is here....</p>
//     </div>  , document.getElementById("root"));


//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById('root'));
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <h1> Hello World!!!</h1>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
