import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page1Child from "./Page1Child";
import Dynamic from "./Dynamic";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/page1" element={<Page1 />}>
          <Route path="child" element={<Page1Child></Page1Child>}></Route>
        </Route>
        <Route path="/page2" element={<Page2></Page2>}></Route>
         <Route path="/dy/:id" element={<Dynamic/>}></Route>
      </Routes>
      App
    </div>
  );
};

export default App;
