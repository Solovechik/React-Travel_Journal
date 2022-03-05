import React from 'react'
import './style.css'
import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data";

export default function App() {
    const places = data.map(place => {
        return(
            <Content item={place}/>
        )
    })
    return (
        <div>
            <Header/>
            <section className={'cards-list'}>
                {places}
            </section>
        </div>
    )
}