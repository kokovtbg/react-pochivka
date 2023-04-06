export async function searchHotels(obj) {

    const res = await fetch(`http://localhost:8080/search-rest`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        // body: JSON.stringify({
        //     "name": "",
        //     "townName": "noTown",
        //     "accommodation": [],
        //     "category": [],
        //     "comfort": [],
        //     "sort": "noSort"
        // })
    });
    if (!res.ok) {
        return "Something went wrong" + res.status;
    }
    const data = await res.json();
    return data;
}

export async function findById(id) {
    const res = await fetch(`http://localhost:8080/hotel-detail-rest/${id}`);
    if(!res.ok) {
        return "Something went wrong" + res.status;
    }
    const data = await res.json();
    return data;
}

export async function registerHotel(username, token, obj) {
    const res = await fetch(`http://localhost:8080/hotel-add-rest/${username}`, {
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    if (!res.ok) {
        return "Something went wrong" + res.status;
    }
    const data = await res.json();
    return data;
}

export async function updateHotel(id, token, obj) {
    const res = await fetch(`http://localhost:8080/hotel-update/${id}`, {
        method: 'put',
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    if (!res.ok) {
        return "Something went wrong" + res.status;
    }
    const data = await res.json();
    return data;
}

export async function deleteHotel(id, token) {
    const res = await fetch(`http://localhost:8080/hotel-delete/${id}`, {
        method: 'delete',
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json'
        }
    });
    if (!res.ok) {
        return "Something went wrong" + res.status;
    }
    const data = await res.json();
    return data;
}