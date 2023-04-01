import { useEffect, useState } from "react"

import { getAccommodation, getCategory, getComfort, getRoom, getSeason } from "../../services/enumService";
import { renderCategoryForAddHotel, renderTitleAccommodation, renderLabelComfort, renderRoom } from "../renderFunctions";

import stylesHotel from './Hotel.Module.css'

export default function HotelAdd() {
    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [information, setInformation] = useState('');
    const [category, setCategory] = useState('');
    const [accommodation, setAccommodation] = useState('');
    const [images, setImages] = useState('');
    const [comfortsChoosen, setComfortsChoosen] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [categoryList, setCategoryList] = useState([]);
    const [accommodationList, setAccommodationList] = useState([]);
    const [comfortList, setComfortList] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const [seasonList, setSeasonList] = useState([]);

    useEffect(() => {
        getCategory().then(data => setCategoryList(data));
        getAccommodation().then(data => setAccommodationList(data));
        getComfort().then(data => setComfortList(data));
        getRoom().then(data => setRoomList(data));
        getSeason().then(data => setSeasonList(data));
    }, []);

    useEffect(() => {
        console.log(rooms);
    },[rooms]);

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onWebsiteChange = (e) => {
        setWebsite(e.target.value);
    }

    const onInformationChange = (e) => {
        setInformation(e.target.value);
    }

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const onAccommodationChange = (e) => {
        setAccommodation(e.target.value);
    }

    const onImagesChange = (e) => {
        setImages(e.target.value);
    }

    const onComfortChange = (e) => {
        const selected = [];
        Array.from(e.target.selectedOptions).forEach(e => selected.push(e.value));
        setComfortsChoosen(state => state.concat(selected));
    }

    const onRoomsChange = (e) => {
        setRooms(state => state.concat(Array.of(e.target.value)));
    }

    return (
        <form>
            <label htmlFor="name">Наименование</label>
            <input type="text" id="name" name="name"
                value={name} onChange={onNameChange} />
            <label htmlFor="website">Уебсайт</label>
            <input type="text" id="website" name="website"
                value={website} onChange={onWebsiteChange} />
            <label htmlFor="information">Информация</label>
            <textarea type="text" id="information" name="information"
                value={information} onChange={onInformationChange} />
            <label htmlFor="category">Категория</label>
            <select name="category" id="category"
                value={category} onChange={onCategoryChange}>
                <option value="noCategory">Без категория</option>
                {categoryList.map((e, i) => <option key={i} value={e}>{renderCategoryForAddHotel(e)}</option>)}
            </select>
            <label htmlFor="accommodation">Настаняване</label>
            <select name="accommodation" id="accommodation"
                value={accommodation} onChange={onAccommodationChange}>
                <option value="noAccommodation">Настаняване*</option>
                {accommodationList.map((e, i) => <option key={i} value={e}>{renderTitleAccommodation(e)}</option>)}
            </select>
            <label htmlFor="images">Снимки</label>
            <textarea type="text" id="images" name="images"
                placeholder="Линкове със снимки всеки на нов ред"
                value={images} onChange={onImagesChange} />
            <label>Удобства</label>
            <select multiple
                name="comforts"
                id="comforts"
                value={comfortsChoosen}
                onChange={onComfortChange}>
                {comfortList.map(e => <option key={e} value={e}>{renderLabelComfort(e)}</option>)}
            </select>
            {/* rooms */}
            <label htmlFor="room">Стаи</label>
            <select name="room" id="room"
                value={rooms} onChange={onRoomsChange}>
                <option value="noRoom">Стаи*</option>
                {roomList.map((e, i) => <option key={i} value={e}>{renderRoom(e)}</option>)}
            </select>
            {/* <label htmlFor="season">Сезони</label>
            <select name="season" id="season"
                value={rooms} onChange={onRoomsChange}>
                <option value="noRoom">Стаи*</option>
                {roomList.map((e, i) => <option key={i} value={e}>{renderRoom(e)}</option>)}
            </select> */}

        </form>
    )
}