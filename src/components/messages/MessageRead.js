import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMessage } from "../../services/messageService";

export default function MessageRead({token}) {
    const { id } = useParams();
    
    const [message, setMessage] = useState('');
    const [readyFetch, setReadyFetch] = useState(false);

    useEffect(() => {
        getMessage(token, id).then(data => setMessage(data));
        setReadyFetch(true);
    }, []);

    if (!readyFetch) {
        return (
            <h1>Зареждане</h1>
        )
    }

    return (
        <>
            <h2>{message.content}</h2>
            <h3>{message.dateTime}</h3>
            <h3>{message.sender.username}</h3>
            <h3>{message.sender.firstName}</h3>
            <h3>{message.sender.lastName}</h3>
        </>
    )
}