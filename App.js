import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"},[
        React.createElement("h1", {}, "I'm a h1 tag of child1"),
        React.createElement("h2", {}, "I'm a h2 tag of child1")
    ] ),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "I'm a h1 tag of child2"),
        React.createElement("h2", {}, "I'm a h2 tag of child2")
    ] )
]

)


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
