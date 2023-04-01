export async function getAccommodation() {
    const response = await fetch("http://localhost:8080/accommodation");
    const data = await response.json();
    return data;
}

export async function getComfort() {
    const response = await fetch("http://localhost:8080/comfort");
    const data = await response.json();
    return data;
}

export async function getCategory() {
    const response = await fetch("http://localhost:8080/category");
    const data = await response.json();
    return data;
}

export async function getTown() {
    const response = await fetch("http://localhost:8080/town");
    const data = await response.json();
    return data;
}

export async function getRoom() {
    const response = await fetch("http://localhost:8080/room");
    const data = await response.json();
    return data;
}

export async function getSeason() {
    const response = await fetch("http://localhost:8080/season");
    const data = await response.json();
    return data;
}