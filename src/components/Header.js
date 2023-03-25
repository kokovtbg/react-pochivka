import { useEffect, useState } from "react";

export default function Header() {
    const [theme, setTheme] = useState("rgb(71, 70, 70)");

    useEffect(() => {
        document.body.style.backgroundColor = theme;
    },[theme])

    function changeTheme(e) {
        setTheme(e.target.value);
    }

    return (
        <header className="navbar-header">
            <nav>
                <ul className="navbar">
                    <li><a href="/home">Търсене</a></li>
                    <li><a href="/hotel-add">Добави хотел</a></li>
                    <li><a href="/user-profile">Профил</a></li>
                    <li><a href="/messages-input">Съобщения</a></li>
                    <li><a href="/login">Вход</a></li>
                    <li><a href="/register">Регистрация</a></li>
                    <li><a href="/logout">Изход</a></li>
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