const h1 = React.createElement("h1" ,null ," hello");
const h2 = React.createElement("h2" , null , "World")
const para = React.createElement("p" ,{id:"para" }, "this is a paragraf");
const div = React.createElement("div" ,null ,[para,h1]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render([h1,h2,div]);