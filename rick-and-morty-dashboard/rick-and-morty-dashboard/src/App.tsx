import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginView } from "./view/login/login.view";
import 'antd/dist/antd.css';
import { DashboardView } from "./view/dashboard/dashboard.view";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginView/>}/>
                <Route path={"/dashboard/*"} element={<DashboardView/>}/>
                <Route path={"*"} element={<Navigate to={"/login"}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
