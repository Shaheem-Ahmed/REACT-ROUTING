import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signer from "./PAGES/SignIn";
import Screen from "./PAGES/Login";
import Board from "./PAGES/Dashboard";


export default function HEADER(){
    return <Router>
        <Routes>
            
            <Route path="/LogIn" element={<Screen />} />
            <Route path="/SignIn" element={<Signer />} />
            <Route path="/Board" element={<Board />} />
        </Routes>
    </Router>
}