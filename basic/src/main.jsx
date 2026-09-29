import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", null, "hello");

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h1);