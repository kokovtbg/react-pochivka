export async function loginUser(obj) {
    const res = await fetch(`http://localhost:8080/api/auth/signin`, {
        method: 'post',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    if (!res.ok) {
        return "Something went wrong" + res.status;
    }
    const data = await res.json();
    return data;
}