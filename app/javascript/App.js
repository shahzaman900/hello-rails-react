import React from "react";
import {Route, Routes} from "react-router-dom";
import Greeting from "./components/Greeting";

const App = () => {
  return <>
    <h1>Hello reviewer 👌😊</h1>
    <Routes>
      <Route path="/" element={<Greeting/>}/>
    </Routes>
  </>
}

export default App;