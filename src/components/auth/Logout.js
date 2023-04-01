import Home from '../Home'

export default function Logout({ onLogoutHandler }) {
    onLogoutHandler('', '');
    return (
        <Home />
    )
}