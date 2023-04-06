import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMessages } from "../../services/messageService";

export default function MessagesInput({ token, username }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getAllMessages(token, username).then(data => setMessages(data));
    }, []);


    return (
        <ul className="messList">{messages.map(m =>
            <ListItem
                key={m.id}
                id={m.id}
                senderUsername={m.sender.username}
                receiverUsername={m.receiver.username}
                content={m.content}
                dateTime={m.dateTime} />
        )}</ul>
    )

}

function ListItem({ id, senderUsername, receiverUsername, content, dateTime }) {
    return (
        <li>
            <Link to={`/message-read/${id}`} >
                <span>Sender - {senderUsername}</span>
                <span>Receiver - {receiverUsername}</span>
                <span>{content}</span>
                <span>{dateTime}</span>
            </Link>
        </li>
    )
}