import './App.css';
import Home from './components/Home';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import {Route, Routes, Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
