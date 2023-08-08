 //place all react codes here
 //create a heading "h1" tag inside react
//<div id="parent">
//      <div id="child1">
//          <h1>I'm h1 tag of child1</h1>
//          <h2>I'm h2 tag of child1</h2>
//      </div>
//      <div id="child2">
//          <h1>I'm h1 tag of child2</h1>
//          <h2>I'm h2 tag of child2</h2>
//      </div>
//</div>


 //const heading = React.createElement("h1", {id:"heading", class:"abc"}, "Hello World from React!");

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"},[
        React.createElement("h1", {}, "I'm h1 tag of child1"),
        React.createElement("h2", {}, "I'm h2 tag of child1")
    ] ),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "I'm h1 tag of child2"),
        React.createElement("h2", {}, "I'm h2 tag of child2")
    ] )
]

)


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
