
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLELEMENT(render )
const heading =  React.createElement(
    "h1",
    {id: "heading"},
    "Namaste Dunia"
);

console.log(heading);

//JSX- HTML like Syntax
//JSX(transpiled before it reaches the JS)-PARCEL - Bable
//JSX => Babel transpiles it to React.createElement => ReactElement.JS Object => HTMLElement(render)
//ReactElement
const jsxHeading = (
<h1 className="head" tabIndex="5">
Namaste React using JSX
</h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

//React Functional Component