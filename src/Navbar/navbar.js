import React from 'react'
import { useEffect, useState } from 'react'
import '../Navbar/navbar.css'
import Logo from '../Img/logo.png'
export default function Func() {
    function NavbarF() {
        window.setInterval(function () {
            const activePage = window.location.pathname;
            const navlinks = document.getElementsByClassName("lis")
            for (let index = 0; index < navlinks.length; index++) {
                const element = navlinks[index];
                if (element.href.includes(`${activePage}`)) {
                    element.classList.add("active")
                }
                else {
                    element.classList.remove("active")
                }
            }
        }, 0)
    }
    useEffect(() => { NavbarF() }, [])
    return (
        <>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One:ital@1&family=Archivo+Black&family=Dosis:wght@200&family=Montserrat:wght@500&family=Rubik:wght@500&family=Sarabun:ital,wght@1,700&family=Secular+One&display=swap" rel="stylesheet"></link>

            <div className='main-navbar'>
                <div className='navbar'>
                    <div  className='logo'><img src={Logo}  onClick={()=> {window.location.href = "/home"}}/></div>
                    <div className='links'>
                        <ul>
                            <li><a className='lis' href='/home'>Home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}