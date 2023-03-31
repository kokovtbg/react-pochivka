import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MessagesInput from './components/MessagesInput';
import Header from './components/Header';
import Hotel from './components/hotel/Hotel';
import Home from './components/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

function App() {
    const [auth, setAuth] = useState('');

    const onLoginHandler = (token) => {
        setAuth(token);
    }

    const onLogoutHandler = (auth) => {
        setAuth(auth);
    }

    return (
        <div className="App">
            <Header auth={auth} />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hotels/:hotelId' element={<Hotel />} />
                <Route path='/login' element={<Login onLoginHandler={onLoginHandler} />}/>
                <Route path='logout' element={<Logout onLogoutHandler={onLogoutHandler} />} />
            </Routes>


            {/* <MessagesInput /> */}
        </div>

    );
}

export default App;
