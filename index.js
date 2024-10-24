import "./index.css";
// https://www.appbrewery.co/p/web-development-course-resources/
// Video-8
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const images = "https://picsum.photos/200";
// const customStyle={
//   fontSize:"4rem",
//   color:"pink"
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <h1 style={customStyle}>Hello Nub!</h1>
//     {/*inline styling} */}
//     <div>
//       <img className="desk-setup" alt="logo" src="logo512.png"></img>
//       <img
//         alt="random image"
//         src={
//           images + "?grayscale" /* grayscale is for black and white images */
//         }
//       ></img>
//       {/* we usually do not use direct link in the coutput because it makes our code less
//       dynamic and less flexiable. */}
//     </div>
//   </div>
// );

// // Video-10
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const date = new Date(2024, 1, 1, 19);
// const currentTime = date.getHours();
// const customStyle = {
//   color: "",
//   borderBottom: "",
// };

// let greetings;

// if (currentTime < 12) {
//   greetings = "Good Morning Noob";
//   customStyle.color = "red";
//   customStyle.borderBottom = "5px solid red";
// } else if (currentTime >= 12 && currentTime < 18) {
//   greetings = "Good Afternoon Noob";
//   customStyle.color = "green";
//   customStyle.borderBottom = "5px solid green";
// } else {
//   greetings = "Good Night Noob";
//   customStyle.color = "SkyBlue";
//   customStyle.borderBottom = "5px solid SkyBlue";
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <h1 className="heading" style={customStyle}>
//     {greetings}
//   </h1>
// );

// // Video-11
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import {Test} from "./11-Video/Test";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Test></Test>
// );

// // Video-12
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { Test } from "./12-Video/Test";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <Test></Test>
//   </div>
// );

// // Video-13
// // Method-1
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import * as PI from "./13-Video/Heading"; /* This will import everything */

// // ReactDOM.render(<Test />, document.getElementById("root")); /* This method in
// // React 18 with a new method called createRoot() for rendering. */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <ul>
//       <li>{PI.default}</li>
//       <li>{PI.Second()}</li>
//       {/* Second and Third are the functoions that
//     is why () is required at the end of the function to call them */}
//       <li>{PI.Third()}</li>
//     </ul>
//   </div>
// );

// // Method-2
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import PI, { Second, Third } from "./13-Video/Heading";

// // ReactDOM.render(<Test />, document.getElementById("root")); /* This method in
// // React 18 with a new method called createRoot() for rendering. */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <ul>
//       <li>{PI}</li>
//       <li>{Second()}</li>
//       {/* Second and Third are the functoions that
//     is why () is required at the end of the function to call them */}
//       <li>{Third()}</li>
//     </ul>
//   </div>
// );

// // Video-14
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import * as temp from "./14-Video/Calculator";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <ul>
//       <li>{temp.Add(15, 5)}</li>
//       <li>{temp.Div(15, 5)}</li>
//       <li>{temp.Mul(15, 5)}</li>
//       <li>{temp.Sub(15, 5)}</li>
//     </ul>
//   </div>
// );

// // Video-18
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { Header } from "./18-Video/Header";
// import { Footer } from "./18-Video/Footer";
// import { Note } from "./18-Video/Note";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <Header></Header>
//     <Footer></Footer>
//     <Note></Note>
//   </div>
// );

// // Video-20
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { UserData } from "./20-Video/UserData";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<div>{UserData()}</div>);

// // Video-21
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { UserInfo } from "./21-Video/UserInfo";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<div>{UserInfo()}</div>);

// // Video-23
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Template } from "./23-Video/Template";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<div><Template></Template></div>);

// Video-24
import React from "react";
import ReactDOM from "react-dom/client";
import {Template} from "./24-Video/Template";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div><Template></Template></div>);

// // Video-25
// import React from "react";
// import ReactDOM from "react-dom/client";
// import emojipedia from "./25-Video/Emoji";

// const newEmojipedia = emojipedia.map(function(emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// });

// console.log(newEmojipedia);

// // Video-26
// import React from "react";
// import ReactDOM from "react-dom/client";
// import newNumbers from "./26-Video/Practice";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<div></div>);

// // Video-27
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Template } from "./27-Video/Template";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<div><Template></Template></div>);
