import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onUsernameChangerHandler = (e) => {
        setUsername(e.target.value);
    }

    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const obj = Object.fromEntries(data);
        loginUser(obj).then(res => {
            console.log(res);
        });
        navigate("/");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Потребителско име</label>
            <input type="text"
                id="username"
                name="username"
                value={username}
                onChange={onUsernameChangerHandler} />
            <label htmlFor="password">Парола</label>
            <input type="password"
                id="password"
                name="password"
                value={password}
                onChange={onPasswordChangeHandler} />
            <button>Вход</button>
        </form>
    )
}