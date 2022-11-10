import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import List from '../Components/List/List'
import Json from '../Jsons/JsonAnime.json'
import JsonGenre from '../Jsons/JsonGenre.json'
import '../Home/home.css'
export default function Func() {
    return (
        <>
            <Navbar />
            <div className='main-home'>
                <div id='top'></div>
                <a onClick={() => { window.scrollTo(0, 0); }} id="go-to-top" className='go-to-top'><i class='bx bx-chevron-up'></i></a>
                <List Json={Json} JsonGenre={JsonGenre} />
            </div>
        </>
    );
}