/**
 * create nested html structure inside your react application  
 * 
 * <div id ="parent">
 *    <div id = "child">
 *       <h1> I am H1 tag </h1>
 *       <h2> I am H2 tag </h2>
 *    </div>
 * <div id="child2">
 * <h1> I am H1 tag </h1>
 * <h2> I am H2 tag </h2>
 * </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent =  React.createElement("div",  {id: "parent" }, [// (react element)parent is not a html or any tag it is an object
    
    React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "This is King"),
        React.createElement("h2", {}, "This is Vivek"),
    ]), //3rd argument

    React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
]);

//JSX  

// const heading =  React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"},
//      "Hello World from React!"
//      );

console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);