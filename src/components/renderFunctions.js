export function renderLabelAccommodation(param) {
    switch (param) {
        case 'ONLY_BED':
            return "OB";
        case 'BED_BREAKFAST':
            return "BB";
        case 'HALF_BOARD':
            return 'HB';
        case 'FULL_BOARD':
            return 'FB';
        case 'ALL_INCLUSIVE':
            return 'AI';
        default:
            return 'Something went wrong';
    }
}

export function renderTitleAccommodation(param) {
    switch (param) {
        case 'ONLY_BED':
            return 'OB - само нощувка(Only Bed)';
        case 'BED_BREAKFAST':
            return 'BB - нощувка и закуска(Bed and Breakfast)';
        case 'HALF_BOARD':
            return 'HB - нощувка със закуска и вечеря/полупансион(Half Board)';
        case 'FULL_BOARD':
            return 'FB - нощувка със закуска, обяд и вечеря/пълен пансион(Full Board)';
        case 'ALL_INCLUSIVE':
            return 'AI - ол инклузив(All Inclusive)';
        default:
            return 'Something went wrong';
    }
}

export function renderTowns(param) {
    switch (param) {
        case 'AHTOPOL':
            return "Ахтопол";
        case 'KITEN':
            return "Китен";
        case 'LOZENEC':
            return "Лозенец";
        case 'NESEBAR':
            return "Несебър";
        case 'POMORIE':
            return "Поморие";
        case 'PRIMORSKO':
            return "Приморско";
        case 'RAVDA':
            return "Равда";
        case 'SVETI_VLAS':
            return "Свети Влас";
        case 'SINEMOREC':
            return "Синеморец";
        case 'SLANCHEV_BRYAG':
            return "Слънчев Бряг";
        case 'SOZOPOL':
            return "Созопол";
        case 'CAREVO':
            return "Царево";
        case 'RAZLOG':
            return "Разлог";
        case 'BANSKO':
            return "Банско";
        case 'SANDANSKI':
            return "Сандански";
        case 'PAMPOROVO':
            return "Пампорово";
        case 'VELINGRAD':
            return "Велинград";
        case 'DEVIN':
            return "Девин";
        case 'BOROVEC':
            return "Боровец";
        case 'VELIKO_TARNOVO':
            return "Велико Търново";
        case 'ELENA':
            return "Елена";
        case 'SOFIA':
            return "София";
        case 'VIDIN':
            return "Видин";
        case 'PLOVDIV':
            return "Пловдив";
        case 'STARA_ZAGORA':
            return "Стара Загора";
        case 'HASKOVO':
            return "Хасково";
        case 'KARDZHALI':
            return "Кърджали"
        case 'RUSE':
            return "Русе";
        default:
            return 'Something went wrong';
    }
}

export function renderLabelComfort(param) {
    switch (param) {
        case 'POOL':
            return "открит басейн";
        case 'RESTAURANT':
            return "ресторант";
        case 'FITNESS':
            return "фитнес";
        case 'PARKING':
            return "паркинг";
        case 'CHILDREN_CORNER':
            return "детски кът";
        case 'BARBEQUE':
            return "барбекю";
        case 'TELEVISION':
            return "телевизор";
        case 'KITCHEN':
            return "кухня";
        case 'INTERNET':
            return "интернет";
        case 'BATHROOM':
            return "баня";
        case 'VC':
            return "тоалетна";
        case 'MICROWAVE':
            return "микровълнова";
        case 'LAUNDRY':
            return "пералня";
        case 'TERRACE':
            return "тераса";
        case 'VIEW':
            return "изглед";
        case 'COFFEE_MACHINE':
            return "кафе машина";
        default:
            return 'Something went wrong';
    }
}

export function renderLabelCategory(param) {
    switch (param) {
        case 'ONE_STAR':
            return "1";
        case 'TWO_STAR':
            return "2";
        case 'THREE_STAR':
            return "3";
        case 'FOUR_STAR':
            return "4";
        case 'FIVE_STAR':
            return "5";
        default:
            return 'Something went wrong';
    }
}

export function renderCategory(category) {
    switch (category) {
        case 'ONE_STAR':
            return <div>
                <i className="fa-solid fa-star"></i>
            </div>;
        case 'TWO_STAR':
            return <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>;
        case 'THREE_STAR':
            return <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>;
        case 'FOUR_STAR':
            return <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>;
        case 'FIVE_STAR':
            return <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>;
        default:
            return "Something went wrong";
    }
}

export function renderCategoryForAddHotel(category) {
    switch (category) {
        case 'ONE_STAR':
            return "1 звезда";
        case 'TWO_STAR':
            return "2 звезди";
        case 'THREE_STAR':
            return "3 звезди";
        case 'FOUR_STAR':
            return "4 звезди";
        case 'FIVE_STAR':
            return "5 звезди";
        default:
            return "Something went wrong";
    }
}

export function renderRoom(room) {
    switch (room) {
        case 'SINGLE':
            return "единична";
        case 'DOUBLE':
            return "двойна";
        case 'TRIPLE':
            return "тройна";
        case 'QUAD':
            return "четворна";
        case 'APARTMENT':
            return "апартамент";
        default:
            return 'Something went wrong';
    }
}

export function renderSeason(season) {
    switch (season) {
        case 'STRONG_SUMMER':
            return "силен летен";
        case 'STRONG_WINTER':
            return "силен зимен";
        case 'WEAK_SUMMER':
            return "слаб летен";
        case 'WEAK_WINTER':
             return "слаб зимен";
        case 'OTHER':
            return "друг"    
        default:
            return 'Something went wrong';
    }
}