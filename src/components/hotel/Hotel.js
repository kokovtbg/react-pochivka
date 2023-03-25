import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { findById } from "../../services/hotelService";
import { renderTowns, renderCategory, renderTitleAccommodation } from "../searchForm/renderFunctions";

import style from "./Hotel.Module.css";

export default function Hotel() {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState({});
    const [fetchReady, setFetchReady] = useState(false);

    useEffect(() => {
        findById(hotelId).then(h => {
            setHotel(h);
            setFetchReady(true);
        });
    }, [hotelId]);


    if (fetchReady) {
        return (
            <div>
                <h1>{hotel.name}</h1>
                <h2>{renderTowns(hotel.town.name)}</h2>
                <h2>{hotel.category !== null ? renderCategory(hotel.category) : ''}</h2>
                <h2>{renderTitleAccommodation(hotel.accommodation)}</h2>
                <h1>{hotel.website !== null ? <a className="link" target="_blank" href={hotel.website}>{hotel.website}</a> : ''}</h1>
                <ul className="list-images">
                    {hotel.images.map((image, i) => <Image key={i} image={image} />)}
                </ul>
                <p>{hotel.information}</p>
                
            </div>
        )
    }
    return <p>Зареждане</p>
}

function Image({ image }) {
    return (
        <li className="list-item-image"><img src={image} alt="hotelImage" /></li>
    )
}