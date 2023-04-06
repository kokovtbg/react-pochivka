const baseUrl = 'http://localhost:8080';

export async function sendMessage(token, body) {
    const path = '/send-message';
    const res = await fetch(baseUrl + path, {
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json' 
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) {
        return 'Something went wrong' + res.status;
    }
    return res.json();
}

export async function getAllMessages(token, username) {
    const path = `/messages-input-rest/${username}`;
    const res = await fetch(baseUrl + path, {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json' 
        }
    });
    if (!res.ok) {
        return 'Something went wrong' + res.status;
    }
    return res.json();
}

export async function getMessage(token, id) {
    const path = `/message-read-rest/${id}`;
    const res = await fetch(baseUrl + path, {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json' 
        }
    });
    if (!res.ok) {
        return 'Something went wrong' + res.status;
    }
    return res.json();
}