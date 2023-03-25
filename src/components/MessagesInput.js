let messages = [];

function messagesIn() {
    const csrfToken = getCookie('CSRF-TOKEN');


    fetch("http://localhost:8080/messages-input-list", {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        credentials: 'include'
    })
        .then(response => response.json())
        .then(json => json.forEach(m => {
            messages.push(m)
        })).catch(e => console.log(e));


    function getCookie(name) {
        if (!document.cookie) {
            return null;
        }

        const xsrfCookies = document.cookie.split(';')
            .map(c => c.trim())
            .filter(c => c.startsWith(name + '='));

        if (xsrfCookies.length === 0) {
            return null;
        }
        return decodeURIComponent(xsrfCookies[0].split('=')[1]);
    }
}

function ListItem(props) {
    return (
        <li>
            <span>Sender - {props.senderUsername}</span>
            <span>Receiver - {props.receiverUsername}</span>
            <span>{props.content}</span>
            <span>{props.dateTime}</span>
        </li>
    )
}

export default function MessagesInput() {
    messages.forEach(m => console.log(m));
    const messList = messages.map(m => 
        <ListItem 
        key={m.id} 
        senderUsername={m.sender.username}
        receiverUsername={m.receiver.username} 
        content={m.content} 
        dateTime={m.dateTime} />
    );
    return (
        <ul className="messList">{messList}</ul>
    )

}

// messagesIn();
