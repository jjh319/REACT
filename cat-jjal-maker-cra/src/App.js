import logo from './logo.svg';
import React from 'react';
import './App.css';
import Title from './components/Title.js';
import MainCard from './components/MainCard';
import FormTag from './components/FormTag';
import Favorites from './components/Favorites';
import jsonLocalStorage from './components/JsonLocalStorage';
import fetchCat from './components/FetchCat';

const App = () => {
    const CAT1 = 'https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react';
    const CAT2 = 'https://cataas.com/cat/BxqL2EjFmtxDkAm2/says/inflearn';
    const CAT3 = 'https://cataas.com/cat/18MD6byVC1yKGpXp/says/JavaScript';

    const [counter, setCounter] = React.useState(() => {
        return jsonLocalStorage.getItem('counter');
    }); // 로컬스토리지에 한번만 접근하게 하기위해 함수 사용

    const [mainCat, setMainCat] = React.useState(CAT1);

    const [favorites, setFavorites] = React.useState(() => {
        return jsonLocalStorage.getItem('favorites') || [];
    }); // 로컬스토리지에 한번만 접근하게 하기위해 함수 사용

    async function setInitialCat() {
        const newCat = await fetchCat('First cat');
        setMainCat(newCat);
    }

    React.useEffect(() => {
        setInitialCat();
    }, []); // 빈 배열은 생성될 때 한번만 실행

    React.useEffect(() => {
        console.log('헬로');
    }, [counter]); // counter가 업뎃 될때만 실행

    const alreadyFavorite = favorites.includes(mainCat);

    async function updateMainCat(value) {
        const newCat = await fetchCat(value);

        setMainCat(newCat);

        setCounter((prev) => {
            // prev = 현재 counter 인자값
            const nextCounter = prev + 1;
            jsonLocalStorage.setItem('counter', nextCounter);
            return nextCounter;
        });
    }

    function handleHeartClick() {
        const nextFavorites = [...favorites, mainCat];
        setFavorites(nextFavorites);
        jsonLocalStorage.setItem('favorites', nextFavorites);
    }

    return (
        <div>
            <Title>{counter}</Title>
            <FormTag updateMainCat={updateMainCat} />
            <MainCard img={mainCat} onHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite} />
            <Favorites favorites={favorites} />
        </div>
    );
};

export default App;
