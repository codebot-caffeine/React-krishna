const heading = React.createElement("h1", {
    id: "heading"
}, "Hello React");

const parent = React.createElement("div", { id: "main" }, [
  React.createElement("h1", {}, "first h1"),
  React.createElement("h2", {}, "first h2"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
