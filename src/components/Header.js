import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ auth }) {
    const [theme, setTheme] = useState("rgb(71, 70, 70)");

    useEffect(() => {
        document.body.style.backgroundColor = theme;
    }, [theme]);

    function changeTheme(e) {
        setTheme(e.target.value);
    }

    return (
        <header className="navbar-header">
            <nav>
                <ul className="navbar">
                    <li><Link to="/">Търсене</Link></li>
                    {auth && <>
                        <li><Link to="/hotel-add">Добави хотел</Link></li>
                        <li><Link to="/user-profile">Профил</Link></li>
                        <li><Link to="/messages-input">Съобщения</Link></li>
                        <li><Link to="/logout">Изход</Link></li></>
                    }

                    {!auth && <>
                        <li><Link to="/login">Вход</Link></li>
                        <li><Link to="/register">Регистрация</Link></li></>}


                </ul>

                <label htmlFor="theme">Фон</label>
                <select name="theme" id="theme" onChange={changeTheme} value={theme}>
                    <option value="rgb(71, 70, 70)">Черно</option>
                    <option value="blue">Синьо</option>
                    <option value="red">Червено</option>
                </select>
            </nav>
        </header>
    )
}