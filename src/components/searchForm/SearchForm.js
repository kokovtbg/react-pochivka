import { useEffect, useState } from "react";
import { getAccommodation, getCategory, getComfort, getTown } from "../../services/enumService";
import { searchHotels } from "../../services/hotelService";
import { renderLabelAccommodation, renderLabelCategory, renderLabelComfort, renderTitleAccommodation, renderTowns } from "./renderFunctions";

import styles from './SearchForm.Module.css';

export default function SearchForm({ hotelsCall }) {
    const [accommodation, setAccommodation] = useState([]);
    const [comfort, setComfort] = useState([]);
    const [category, setCategory] = useState([]);
    const [town, setTown] = useState([]);

    const [accommodationList, setAccommodationList] = useState({});
    const [nameHotel, setNameHotel] = useState('');
    const [townName, setTownName] = useState('noTown');
    const [categoryList, setCategoryList] = useState({});
    const [comfortList, setComfortList] = useState({});

    useEffect(() => {
        getAccommodation().then(data => setAccommodation(data));
        getComfort().then(data => setComfort(data));
        getCategory().then(data => setCategory(data));
        getTown().then(data => setTown(data));
    }, []);

    useEffect(() => {
        accommodation.forEach(a => setAccommodationList(state => ({ ...state, [a]: false })));
        category.forEach(c => setCategoryList(state => ({ ...state, [c]: false })));
        comfort.forEach(c => setComfortList(state => ({ ...state, [c]: false })));
    }, [accommodation, category, comfort]);



    const onAccommodationChangeHandler = (e) => {
        setAccommodationList(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    const onNameHotelChangeHandler = (e) => {
        setNameHotel(e.target.value);
    }

    const onTownNameChangeHandler = (e) => {
        setTownName(e.target.value);
    }

    const onCategoryChangeHandler = (e) => {
        setCategoryList(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    const onComfortChangeHandler = (e) => {
        setComfortList(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        searchHotels({
            "name": nameHotel,
            "townName": townName,
            "accommodation": accommodation.filter(e => accommodationList[e] === true),
            "category": category.filter(c => categoryList[c] === true),
            "comfort": comfort.filter(c => comfortList[c] === true),
            "sort": "noSort"
        }).then(data => {
            hotelsCall(data);
        });
    }

    return (
        <form className="bg form" onSubmit={onSubmitHandler}>
            <div className="divs">
                <label className="labels" htmlFor="nameHotel">Име на хотел</label>
                <input type="text" className="input"
                    id="nameHotel"
                    name="name"
                    value={nameHotel}
                    onChange={onNameHotelChangeHandler} />
            </div>
            <div className="divs">
                <label className="labels" htmlFor="townName">Дестинация</label>
                <select type="text" className="input"
                    id="townName"
                    name="townName"
                    value={townName}
                    onChange={onTownNameChangeHandler}>
                    <option className="option" value="noTown">Избери град</option>
                    {town.map((t, i) => <option className="option" key={i} value={t}>{renderTowns(t)}</option>)}
                </select>
            </div>
            <div className="divs">
                <p className="labels">Хранене</p>
                {accommodation.map((a, i) =>
                    <CheckBox
                        key={i}
                        id={a}
                        label={renderLabelAccommodation(a)}
                        title={renderTitleAccommodation(a)}
                        name="accommodation"
                        value={a}
                        checked={accommodationList[a] || false}
                        onChange={onAccommodationChangeHandler} />
                )}
            </div>
            <div className="divs">
                <p className="labels">Звезди</p>
                {category.map((c, i) =>
                    <CheckBox
                        key={i}
                        id={c}
                        label={renderLabelCategory(c)}
                        name="category"
                        value={c}
                        checked={categoryList[c] || false}
                        onChange={onCategoryChangeHandler} />)}
            </div>
            <div className="flex-div divs">
                <p className="labels">Удобства</p>

                {comfort.map((c, i) =>
                    <div key={i} className="flex-element">
                        <CheckBox
                            id={c}
                            label={renderLabelComfort(c)}
                            name="comfort"
                            value={c}
                            checked={comfortList[c] || false}
                            onChange={onComfortChangeHandler} />
                    </div>)}

            </div>
            <button className="btn">Търси</button>
        </form>
    )
}

const CheckBox = ({ id, label, title, name, value, checked, onChange }) => {
    return (
        <>
            <label htmlFor={id} title={title}>{label}
                {(id === 'ONE_STAR' || id === 'TWO_STAR'
                    || id === 'THREE_STAR' || id === 'FOUR_STAR'
                    || id === 'FIVE_STAR') && <i className="fa-solid fa-star"></i>} </label>
            <input className="checkbox"
                type="checkbox"
                id={id}
                title={title}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange} />
        </>
    )
}