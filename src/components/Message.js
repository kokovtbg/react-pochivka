export default function Message(props) {
    return (
        <p>
            <span>{props.username}</span>
            <span>{props.content}</span>
            <span>{props.dateTime}</span>
        </p>
    );
}