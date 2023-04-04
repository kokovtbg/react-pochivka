export async function loginUser(obj) {
    const res = await fetch(`http://localhost:8080/auth/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    if (!res.ok) {
        return "Something went wrong" + res.status;
    }
    return res.json();
}

export async function registerUser(obj) {
    const res = await fetch(`http://localhost:8080/auth/register-rest`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    if (!res.ok) {
        return "Something went wrong" + res.status;
    }
    return res.json();
}