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