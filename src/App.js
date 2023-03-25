import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MessagesInput from './components/MessagesInput';
import Header from './components/Header';
import Hotel from './components/hotel/Hotel';
import Home from './components/Home';

function App() {

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hotels/:hotelId' element={<Hotel />} />
            </Routes>


            {/* <MessagesInput /> */}
        </div>

    );
}

export default App;
