import React, { FC, useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./routes/main";


const App: FC = () => {
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    try{
      if(window.ethereum){
        const accounts =await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      }else{
        alert("Install Metamask");
      }

    } catch(error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;