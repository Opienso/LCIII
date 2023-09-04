import React, { useState } from 'react'
import BeersList from '../beerList/BeersList';
import BeerAvailable from '../beerAvailable/BeerAvailable';
import BeerCount from '../beerCount/BeerCount';
import BeerStyles from '../beerStyles/BeerStyles';
import ChangeDollar from '../changeDollar/ChangeDollar';

const Beers = () => {
    const beers = [
        {
            id: 1,
            beerName: "American",
            beerStyle: "IPA",
            price: 3,
            available: true,
        },
        {
            id: 2,
            beerName: "Argenta",
            beerStyle: "IPA",
            price: 4,
            available: false,
        },
        {
            id: 3,
            beerName: "Irish",
            beerStyle: "Red",
            price: 4,
            available: true,
        },
        {
            id: 4,
            beerName: "Scotish",
            beerStyle: "Red",
            price: 3,
            available: true,
        },
        {
            id: 5,
            beerName: "DeEssoCiTratta",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 6,
            beerName: "Santa APA",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 7,
            beerName: "German",
            beerStyle: "Pilsen",
            price: 1,
            available: true,
        },
        {
            id: 8,
            beerName: "London Porter",
            beerStyle: "Porter",
            price: 2,
            available: false,
        },
        {
            id: 9,
            beerName: "Scotish ALE",
            beerStyle: "Red",
            price: 5,
            available: false,
        },
    ];
    const beerStyles = beers.map((beer) => beer.beerStyle) //Guardo los estilos de cervezas repetidos en un array aparte que voy a pasar por parametros al componente "BeerStyles"
    const [newDollar, setNewDollar] = useState(731) //primero declaramos un state y le damos un valor inicial
    const [showDollar, setShowDollar] = useState(true)

    const setNewDollarHandler = (value) => {  //hacemos una función que contiene la función del useState que cambia el valor de la variable del state
        setNewDollar(value)
    }
    const setShowDollarHandler = (value) => {
        setShowDollar(value)
    }

    return (
        <div className='beers'>
            <ChangeDollar
                setNewDollarHandler={setNewDollarHandler}
                setShowDollarHandler={setShowDollarHandler}
                showDollar={showDollar}
            />
            <BeersList beers={beers} dolar={newDollar} />
            <BeerAvailable beers={beers} />
            <BeerCount beers={beers} dolar={newDollar} />
            <BeerStyles beerStyles={beerStyles} />
        </div>
    )
}

export default Beers