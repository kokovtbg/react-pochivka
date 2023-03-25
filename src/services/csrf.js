export async function getCsrf() {
    const res = await fetch("http://localhost:8080/csrf");
    const data = await res.json();
    return data;
}
