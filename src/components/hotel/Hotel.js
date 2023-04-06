import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { deleteHotel, findById } from "../../services/hotelService";
import { renderTowns, renderCategory, renderTitleAccommodation, renderLabelComfort } from "../renderFunctions";

import style from "./Hotel.Module.css";

export default function Hotel({ username, token }) {
    const { hotelId } = useParams();
    
    const [hotel, setHotel] = useState({});
    const [fetchReady, setFetchReady] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        findById(hotelId).then(h => {
            setHotel(h);
            setFetchReady(true);
        });
    }, [hotelId]);

    const onDelete = () => {
        deleteHotel(hotel.id, token);
        navigate('/');
    }


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
                <p style={{ marginBottom: '20px' }}>{hotel.information}</p>
                <div className="rooms-comforts">
                    <ul>
                        {hotel.comforts.map(c => <li key={c.name}>{renderLabelComfort(c.name)}</li>)}
                    </ul>
                    <table>
                        <tbody>
                            {hotel.rooms.map(r =>
                                <tr>
                                    <td>Стая - {renderRooms(r.roomType)}</td>
                                    <td>Сезон - {renderSeasons(r.season)}</td>
                                    <td>Цена - {r.price !== 0 ? r.price : 'не се предлага'}</td>
                                </tr>)}
                        </tbody>
                    </table>
                    <div>
                        <h2>{hotel.owner.telephone}</h2>
                        <h2>{hotel.owner.email}</h2>
                        {username === hotel.owner.username &&
                            <><Link to={`/hotel-update/${hotel.id}`} >Редактране</Link><button onClick={onDelete}>Delete</button></>
                        }
                        {username && username !== hotel.owner.username &&
                            <Link className="link" to={`/send-message/${hotel.owner.username}`} >Изпрати съобщение</Link>}
                    </div>

                </div>
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

function renderRooms(room) {
    switch (room) {
        case 'SINGLE':
            return 'единична';
        case 'DOUBLE':
            return 'двойна';
        case 'TRIPLE':
            return 'тройна';
        case 'QUAD':
            return 'четворна';
        case 'APARTMENT':
            return 'апартамент';
    }
}

function renderSeasons(season) {
    switch (season) {
        case 'STRONG_SUMMER':
            return 'силен летен';
        case 'STRONG_WINTER':
            return 'силен зимен';
        case 'WEAK_SUMMER':
            return 'слаб летен';
        case 'WEAK_WINTER':
            return 'слаб зимен';
        case 'OTHER':
            return 'друг';
    }
}
