import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { renderTitleAccommodation, renderTowns, renderCategory } from '../renderFunctions';

import styles from './SearchHotelList.Module.css';

export default function SearchHotelList({ hotels }) {
    const [hotelsList, setHotelsList] = useState([]);

    useEffect(() => {
        setHotelsList(hotels);
    }, [hotels]);

    return (
        <ul className='hotels-list'>
            {hotelsList.map(h =>
                <Hotel key={h.id}
                    id={h.id}
                    name={h.name}
                    information={h.information}
                    accommodation={h.accommodation}
                    renderTitleAccommodation={renderTitleAccommodation}
                    category={h.category}
                    comforts={h.comforts}
                    images={h.images}
                    townName={h.town.name}
                    renderTowns={renderTowns}
                    lowestPrice={h.lowestPrice} />
            )}
        </ul>
    )
}

function Hotel({ id,
    name,
    information,
    accommodation,
    renderTitleAccommodation,
    category,
    comforts,
    images,
    townName,
    renderTowns,
    lowestPrice
}) {
    return (
        <li className='list-item'>
            <Link to={`/hotels/${id}`} >
                <div className='image-div'>{images ? <img src={images[0]} alt="hotel" /> : ''}</div>
                <div className='info-hotel'>
                    <h2>{name}</h2>
                    <h3>{renderTowns(townName)}</h3>
                    <h3>{renderTitleAccommodation(accommodation)}</h3>
                    <h3>{renderCategory(category)}</h3>
                    <p>{information.substring(0, 250)}</p>
                    <h2>{lowestPrice}<i className="fa-solid fa-sack-dollar"></i></h2>
                </div>
            </Link>
        </li>
    )
}

