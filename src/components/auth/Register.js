import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { getTown } from "../../services/enumService";
import { renderTowns } from "../renderFunctions";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRep, setPasswordRep] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [town, setTown] = useState('');

    const navigate = useNavigate();

    const [tonwList, setTownList] = useState([]);

    useEffect(() => {
        getTown().then(data => setTownList(data));
    }, []);

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onPasswordRepChange = (e) => {
        setPasswordRep(e.target.value);
    }

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastname(e.target.value);
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const onTownChange = (e) => {
        setTown(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            email: email,
            password: password,
            confirmPassword: passwordRep,
            firstName: firstName,
            lastName: lastName,
            telephone: phone,
            town: town
        }
        registerUser(data);
        navigate('/');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="username">Потребителско име</label>
                <input type="text" name="username" id="username"
                    value={username} onChange={onUsernameChange} />
            </div>
            <div>
                <label htmlFor="email">Електронна поща</label>
                <input type="email" name="email" id="email"
                    value={email} onChange={onEmailChange} />
            </div>
            <div>
                <label htmlFor="password">Парола</label>
                <input type="password" name="password" id="password"
                    value={password} onChange={onPasswordChange} />
            </div>
            <div>
                <label htmlFor="password-rep">Повтори парола</label>
                <input type="password" name="password-rep" id="password-rep"
                    value={passwordRep} onChange={onPasswordRepChange} />
            </div>
            <div>
                <label htmlFor="firstName">Собствено Име</label>
                <input type="text" name="firstName" id="firstName"
                    value={firstName} onChange={onFirstNameChange} />
            </div>
            <div>
                <label htmlFor="lastName">Фамилия</label>
                <input type="text" name="lastName" id="lastName"
                    value={lastName} onChange={onLastNameChange} />
            </div>
            <div>
                <label htmlFor="phone">Телефон</label>
                <input type="text" name="phone" id="phone"
                    value={phone} onChange={onPhoneChange} />
            </div>
            <div>
                <select name="town" id="town"
                    value={town} onChange={onTownChange}>
                    <option value="noTown">Избери град</option>
                    {tonwList.map(t => <option key={t} value={t}>{renderTowns(t)}</option>)}
                </select>
            </div>
            <button className="btn-add">Регистрация</button>
        </form>
    )
}