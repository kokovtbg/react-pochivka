import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sendMessage } from "../../services/messageService";

import stylesMessageForm from './Message.Module.css';

export default function Message({token, senderUsername}) {
    const { username } = useParams();
    const navigate = useNavigate();

    const [usernameValue, setUsernameValue] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setUsernameValue(username);
    }, []);

    const onUsernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    }

    const onContentChangeHandler = (e) => {
        setContent(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            content: content,
            sender: {
                username: senderUsername
            },
            receiver: {
                username: usernameValue
            }
        }
        sendMessage(token, data);
        navigate('/');
    }

    return (
        <form className="message-form" onSubmit={onSubmitHandler}>
            <h3>До</h3>
            <input type="text" id="receiver" name="receiver"
                value={usernameValue} onChange={onUsernameChangeHandler} />
            <textarea name="content" id="content"
                cols="30" rows="10"
                value={content} onChange={onContentChangeHandler} ></textarea>
            <button className="btn-send">Изпрати</button>
        </form>
    );
}