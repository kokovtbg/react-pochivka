import Home from '../Home'

export default function Logout({ onLogoutHandler }) {
    sessionStorage.removeItem('token');
    onLogoutHandler('');
    return (
        <Home />
    )
}