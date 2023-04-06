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
import Message from './components/messages/Message';
import HotelAdd from './components/hotel/HotelAdd';
import HotelUpdate from './components/hotel/HotelUpdate';
import Register from './components/auth/Register';

function App() {
    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');

    const onLoginHandler = (token, username) => {
        setToken(token);
        setUsername(username);
    }

    const onLogoutHandler = (token, username) => {
        setToken(token);
        setUsername(username);
    }

    return (
        <div className="App">
            <Header token={token} />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hotels/:hotelId' element={<Hotel username={username} token={token} />} />
                <Route path='/login' element={<Login onLoginHandler={onLoginHandler} />}/>
                <Route path='/logout' element={<Logout onLogoutHandler={onLogoutHandler} />} />
                <Route path='/send-message/:username' element={<Message token={token} senderUsername={username}/>} />
                <Route path='/hotel-add' element={<HotelAdd username={username} token={token} />} />
                <Route path='/hotel-update/:id' element={<HotelUpdate token={token} />} ></Route>
                <Route path='/register' element={<Register />} />
            </Routes>


            {/* <MessagesInput /> */}
        </div>

    );
}

export default App;
