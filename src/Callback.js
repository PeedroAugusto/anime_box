import React from 'react'
import { useEffect, useState } from 'react'
import './style.css'
import 'boxicons'
import Json from './Jsons/JsonAnime.json'

export default function Func() {
    function callback() {
        window.location.href = "/home"
    }
    useEffect(() => { callback() }, [])
    return (
        <></>
    );
}