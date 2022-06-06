import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Info from "./pages/Info";

function App() {


  return (
   <BrowserRouter>
   <Header/>
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
