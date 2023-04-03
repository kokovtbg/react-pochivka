import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { findById, updateHotel } from "../../services/hotelService";
import { getCategory, getAccommodation, getComfort, getRoom, getSeason, getTown } from "../../services/enumService";
import { renderTowns, renderCategoryForAddHotel, renderTitleAccommodation, renderLabelComfort, renderRoom, renderSeason } from "../renderFunctions";

export default function HotelUpdate({ token }) {
    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [town, setTown] = useState('');
    const [website, setWebsite] = useState('');
    const [information, setInformation] = useState('');
    const [category, setCategory] = useState('');
    const [accommodation, setAccommodation] = useState('');
    const [images, setImages] = useState('');
    const [comfortsChoosen, setComfortsChoosen] = useState([]);

    const [rooms, setRooms] = useState([]);
    const [roomType, setRoomType] = useState('');
    const [seasonOption, setSeasonOption] = useState(false);
    const [season, setSeason] = useState('');
    const [priceOption, setPriceOption] = useState(false);
    const [price, setPrice] = useState(0);

    const [existingRoom, setExistingRoom] = useState(false);
    const [roomRegistered, setRoomRegistered] = useState(false);
    const [showCurrRooms, setShowCurrRooms] = useState(false);

    const [categoryList, setCategoryList] = useState([]);
    const [accommodationList, setAccommodationList] = useState([]);
    const [comfortList, setComfortList] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const [seasonList, setSeasonList] = useState([]);
    const [townList, setTownList] = useState([]);

    useEffect(() => {
        getCategory().then(data => setCategoryList(data));
        getAccommodation().then(data => setAccommodationList(data));
        getComfort().then(data => setComfortList(data));
        getRoom().then(data => setRoomList(data));
        getSeason().then(data => setSeasonList(data));
        getTown().then(data => setTownList(data));

        findById(id).then(data => {
            setName(data.name);
            setTown(data.town.name);
            setWebsite(data.website);
            setInformation(data.information);
            setCategory(data.category);
            setAccommodation(data.accommodation);
            setImages(data.images.join('\n'));
            setComfortsChoosen(data.comforts.map(c => c.name));
            setRooms(data.rooms);
        });
    }, []);

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onTownChange = (e) => {
        setTown(e.target.value);
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

    const onRoomChange = (e) => {
        setSeasonOption(true);
        setRoomType(e.target.value);
        setRoomRegistered(false);
        setExistingRoom(false);
    }

    const onSeasonChange = (e) => {
        setSeason(e.target.value);
        setPriceOption(true);
        setRoomRegistered(false);
        setExistingRoom(false);
    }

    const onPriceChange = (e) => {
        setPrice(Number(e.target.value));
    }

    const createRoom = () => {
        if (rooms.some(e => e.roomType === roomType && e.season === season)) {
            setExistingRoom(true);
            return;
        }
        setRooms(state => state.concat(Array.of({
            roomType: roomType,
            season: season,
            price: price
        })));
        setSeasonOption(false);
        setPriceOption(false);
        setExistingRoom(false);
        setRoomRegistered(true);
    }

    const showRooms = () => {
        setShowCurrRooms(!showCurrRooms);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            town: town,
            website: website,
            information: information,
            category: category,
            accommodation: accommodation,
            images: images,
            comforts: comfortsChoosen,
            rooms: rooms
        }
        updateHotel(id, token, data);

        navigate('/');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Наименование</label>
                <input type="text" id="name" name="name"
                    value={name} onChange={onNameChange} />
            </div>
            <div>
                <label htmlFor="town">Град</label>
                <select name="town" id="town"
                    value={town} onChange={onTownChange}>
                    <option value="noCategory">Избери град*</option>
                    {townList.map((e, i) => <option key={i} value={e}>{renderTowns(e)}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="website">Уебсайт</label>
                <input type="text" id="website" name="website"
                    value={website} onChange={onWebsiteChange} />
            </div>
            <div>
                <label htmlFor="information">Информация</label>
                <textarea type="text" id="information" name="information"
                    value={information} onChange={onInformationChange} />
            </div>
            <div>
                <label htmlFor="category">Категория</label>
                <select name="category" id="category"
                    value={category} onChange={onCategoryChange}>
                    <option value="noCategory">Без категория</option>
                    {categoryList.map((e, i) => <option key={i} value={e}>{renderCategoryForAddHotel(e)}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="accommodation">Настаняване</label>
                <select name="accommodation" id="accommodation"
                    value={accommodation} onChange={onAccommodationChange}>
                    <option value="noAccommodation">Настаняване*</option>
                    {accommodationList.map((e, i) => <option key={i} value={e}>{renderTitleAccommodation(e)}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="images">Снимки</label>
                <textarea type="text" id="images" name="images"
                    placeholder="Линкове със снимки всеки на нов ред"
                    value={images} onChange={onImagesChange} />
            </div>
            <div>
                <label>Удобства</label>
                <select multiple
                    name="comforts"
                    id="comforts"
                    value={comfortsChoosen}
                    onChange={onComfortChange}>
                    {comfortList.map(e => <option key={e} value={e}>{renderLabelComfort(e)}</option>)}
                </select>
            </div>

            {/* rooms */}
            <label htmlFor="room">Стаи</label>
            <select name="room" id="room"
                value={roomType} onChange={onRoomChange}>
                <option value="noRoom">Стаи*</option>
                {roomList.map((e, i) => <option key={i} value={e}>{renderRoom(e)}</option>)}
            </select>
            {seasonOption && <>
                <label htmlFor="season">Сезони</label>
                <select name="season" id="season"
                    value={season} onChange={onSeasonChange}>
                    <option value="noRoom">Сезони*</option>
                    {seasonList.map((e, i) => <option key={i} value={e}>{renderSeason(e)}</option>)}
                </select> </>}
            {priceOption && <>
                <label htmlFor="price">Цена</label>
                <input type="number" id="price" name="price"
                    value={price} onChange={onPriceChange} />
                <button className="btn-hotel" type="button" onClick={createRoom}>Избери стая</button>
            </>}
            {existingRoom && <h2 style={{ color: 'red' }}>Стая от този тип и сезон съществува</h2>}
            {roomRegistered && <h2>Стая регистрирана</h2>}
            <div>
                <button className="btn-hotel" type="button" onClick={showRooms}>Виж/Скрий текущи стаи</button>
            </div>

            {showCurrRooms && <ul>{rooms.map((r, i) =>
                <li key={i}>{renderRoom(r.roomType)}---{renderSeason(r.season)}---{r.price}---</li>)}</ul>}

            <button className="btn-add-hotel btn-hotel">Регистрирай Хотел</button>
        </form>
    )
}