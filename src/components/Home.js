import { useState } from "react";
import SearchForm from '../components/searchForm/SearchForm';
import SearchHotelList from '../components/searchHotelList/SearchHotelList';

export default function Home() {
    const [hotels, setHotels] = useState([]);

    const hotelsCall = (data) => {
        setHotels(data);
    }


    return (
        <main>
            <SearchForm hotelsCall={hotelsCall} />

            <SearchHotelList hotels={hotels} />
        </main>
    )
}