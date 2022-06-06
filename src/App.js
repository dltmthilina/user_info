import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

import Info from "./pages/Info";

function App() {


  return (
   <BrowserRouter>
   
   <div>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/info" element={<Info/>}/>
     </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
