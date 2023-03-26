import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./routes/main";


const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;