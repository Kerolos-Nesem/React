//Write code here
//To make a component reusable, I'm going to pass properties to it
const Pet = (props) =>{
    return React.createElement("div",{},[
        React.createElement("h1",{}, props.name),
        React.createElement("h2",{}, props.animal),
        React.createElement("h2",{}, props.breed),
    ]);
};
const App = () => {
    return React.createElement(
        "div",
        {}, //Class name - ID Anything tha you want passed in as a child
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet,{
            name: "Theo",
            animal: "Dog",
            breed: "Mut",
        }),
        React.createElement(Pet,{
         name: "Tut",
        animal: "Dog",
        breed: "Mut",
    }),
        React.createElement(Pet,{
            name: "Koda",
            animal: "Dog",
            breed: "Mut",
        },
    ));
};

ReactDOM.render(React.createElement(App,{}), document.getElementById("root"))
//Can pass parameters in the render function using {}