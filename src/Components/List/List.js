import React from 'react'
import { useEffect, useState } from 'react'
import '../List/List.css'

export default function Func({ Json, JsonGenre }) {
    const [search, setSeachName] = useState("")
    const [genres, setGenres] = useState([])
    const [listGenre, setListGenre] = useState([])
    const [listStar, setListStar] = useState([])
    const listYear = Json.map(x => x.year).filter((este, i) => Json.map(x => x.year).indexOf(este) === i).sort().reverse()
    const [filterYear, setfilterYear] = useState('')
    const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
    const [pageLenth, setPageLength] = useState();
    window.addEventListener('resize', function (e) {
        const grid = document.getElementById("list")
        setPageLength(e.currentTarget.innerWidth)
        if (e.currentTarget.innerWidth < 600) {
            grid.classList.remove("list-grid-complexe")
            grid.classList.add("list-grid-simple")
        }
    })
    function SetGrid(typeGrid) {
        const grid = document.getElementById("list")

        if (typeGrid === "simple") {
            grid.classList.remove("list-grid-complexe")
            grid.classList.add("list-grid-simple")
        }
        if (typeGrid === "complexe") {
            grid.classList.remove("list-grid-simple")
            grid.classList.add("list-grid-complexe")
        }
    }
    function SetGenre() {
        JsonGenre.map((x) =>
            setGenres(names => [...names, x])
        );

    }
    function checkID(el) {
        return el.id === this.param;
    }
    function Select() {
        window.onload = function () {

            const selected = document.getElementById("selected1")
            const optionsContainer = document.getElementById("main-options1")
            const optionsList = document.querySelectorAll("#options1");

            selected.addEventListener("click", () => {
                optionsContainer.classList.toggle("active");
            });

            optionsList.forEach(o => {
                o.addEventListener("click", () => {
                    optionsContainer.classList.remove("active");
                });
            });


            const selected2 = document.getElementById("selected2")
            const optionsContainer2 = document.getElementById("main-options2")
            const optionsList2 = document.querySelectorAll("#options2");

            selected2.addEventListener("click", () => {
                optionsContainer2.classList.toggle("active");
            });

            optionsList2.forEach(o => {
                o.addEventListener("click", () => {
                    optionsContainer2.classList.remove("active");
                });
            });

            const selected3 = document.getElementById("selected3")
            const optionsContainer3 = document.getElementById("main-options3")
            const optionsList3 = document.querySelectorAll("#options3");

            selected3.addEventListener("click", () => {
                optionsContainer3.classList.toggle("active");
            });

            optionsList3.forEach(o => {
                o.addEventListener("click", () => {
                    optionsContainer3.classList.remove("active");
                });
            });
        }
    }
    function SetListFilters(obj, type) {
        if (type === "genre") {
            if (listGenre.map(x => x.name).includes(obj.name)) {
                <></>
            } else {
                setListGenre(oldArray => [...oldArray, obj]);
            }
        } else if ("stars") {
            if (listStar.map(x => x).includes(obj.star)) {
                <></>
            } else {
                setListStar(oldArray => [...oldArray, obj.star]);
            }
        }
    }
    function DeleteFilter(item, type) {
        if (type === "stars") {
            setListStar(listStar.filter(x => x !== item))
        }
        if (type === "genre") {
            setListGenre(listGenre.filter(x => x !== item))
        }
    }
    useEffect(() => { SetGenre() }, [])
    return (
        <>
            {Select()}
            <div className='main-list' >
                <div className='filters'>
                    <input className='search' value={search} type={'text'} onChange={e => setSeachName(e.target.value)} placeholder={'Search...'} />

                    <div className="container">
                        <div className="select-box">
                            <div className="options-container" id='main-options1'>
                                {JsonGenre.map((x) =>
                                    <div className="option" id='options1' onClick={() => { SetListFilters({ "name": x.name, "id": x.id }, "genre") }}>
                                        <input type="radio" className="radio" id={x.id} name="category" />
                                        <label for={x.id}>{x.name}</label>
                                    </div>
                                )}
                            </div>
                            <div className="selected" id='selected1'> Genre <i className='bx bx-chevron-down' ></i> </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="select-box">
                            <div className="options-container" id='main-options2'>
                                <div className="option" id='options2' onClick={() => { SetListFilters({ "star": 1 }, "stars") }}>
                                    <input type="radio" className="radio" id='1star' name="category" />
                                    <label for='1star'>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star bxsnot' ></i>
                                        <i className='bx bxs-star bxsnot' ></i>
                                        <i className='bx bxs-star bxsnot' ></i>
                                        <i className='bx bxs-star bxsnot' ></i>
                                    </label>
                                </div>
                                <div className="option" id='options2' onClick={() => { SetListFilters({ "star": 2 }, "stars") }}>
                                    <input type="radio" className="radio" id='2star' name="category" />
                                    <label for='2star'>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star bxsnot'></i>
                                        <i className='bx bxs-star bxsnot'></i>
                                        <i className='bx bxs-star bxsnot'></i>
                                    </label>
                                </div>
                                <div className="option" id='options2' onClick={() => { SetListFilters({ "star": 3 }, "stars") }}>
                                    <input type="radio" className="radio" id='3star' name="category" />
                                    <label for='3star'>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star bxsnot' ></i>
                                        <i className='bx bxs-star bxsnot' ></i>
                                    </label>
                                </div>
                                <div className="option" id='options2' onClick={() => { SetListFilters({ "star": 4 }, "stars") }}>
                                    <input type="radio" className="radio" id='4star' name="category" />
                                    <label for='4star'>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star bxsnot' ></i>
                                    </label>
                                </div>
                                <div className="option" id='options2' onClick={() => { SetListFilters({ "star": 5 }, "stars") }}>
                                    <input type="radio" className="radio" id='5star' name="category" />
                                    <label for='5star'>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                    </label>
                                </div>
                            </div>
                            <div className="selected" id='selected2'> Star <i className='bx bx-chevron-down' ></i> </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="select-box">
                            <div className="options-container" id='main-options3'>
                                {listYear.map((x) =>
                                    <div className="option" id='options3' onClick={() => { setfilterYear(x) }}>
                                        <input type="radio" className="radio" id={x} name="category" />
                                        <label for={x}>{x}</label>
                                    </div>
                                )}
                            </div>
                            <div className="selected" id='selected3'> Year <i className='bx bx-chevron-down' style={{ marginLeft: "10px" }}></i></div>
                        </div>
                    </div>
                </div>
                <div className='filters-to-do'>
                    {(listGenre.length === 0 && listStar.length === 0 && search === "" && filterYear === "") ? <></> :
                        <i className='bx bxs-filter-alt' style={{ color: "#8ba0b2", marginRight: "40px", marginTop: "10px" }}></i>}
                    {(search !== "") ? <p className='search-filter' onClick={() => { setSeachName("") }}>Search:  {search} <i className='bx bx-x'></i></p> : <></>}
                    {listGenre.map((x) =>
                        <p onClick={() => { DeleteFilter(x, "genre") }} >{x.name}<i className='bx bx-x'></i></p>
                    )}
                    {listStar.map((x) =>
                        <p style={{ paddingLeft: "10px" }} onClick={() => { DeleteFilter(x, "stars") }} >
                            {(() => {
                                let rows = [];
                                for (let i = 0; i < x; i++) {
                                    rows.push(<i className='bx bxs-star'></i>)
                                }
                                return rows;
                            })()}
                            {(() => {
                                let rowss = [];
                                var qnt = 5 - x;
                                for (let i = 0; i < qnt; i++) {
                                    rowss.push(<i className='bx bxs-star bxsnot'></i>)
                                }
                                return rowss;
                            })()}
                            <i className='bx bx-x'></i>
                        </p>
                    )}
                    {(filterYear !== null && filterYear !== "") ? <p onClick={() => { setfilterYear("") }} >{filterYear}<i className='bx bx-x'></i></p> : <></>}
                    {(listGenre.length + listStar.length > 2) ? <p onClick={() => { setListGenre([]); setSeachName(""); setListStar([]); setfilterYear("") }} className='clear-filters'>Clear All<i className='bx bx-x'></i></p> : <></>}
                </div>
                <div className='set-grid'>
                    <i className='bx bxs-grid' onClick={() => { SetGrid('simple') }}></i>
                    <i className='bx bxs-grid-alt' onClick={() => { SetGrid('complexe') }}></i>

                </div>
                <div className='list list-grid-simple' id='list'>
                    {Json.map((x) =>
                        <>
                            {(filterYear !== "" && x.year !== filterYear) ? <></> :
                                (listStar.length !== 0 && !listStar.includes(x.starts)) ? <></> :
                                    (!isSubset(x.genres.map(x => x.id), listGenre.map(x => x.id))) ? <></> :
                                        (search !== "") ?
                                            (x.name.toLowerCase().includes(search.toLowerCase())) ?
                                                <div className={`item [item-${x.id}]`}>
                                                    <img src={x.img} />
                                                    <p className='name'>{x.name}</p>
                                                    <div className='popup'>
                                                        <p className='name'>{x.name}</p>
                                                        <p className='year'>{x.year}</p>
                                                        <p className='temp-eps'>{x.temps}</p>
                                                        <div className='stars'>
                                                            {(() => {
                                                                let rows = [];
                                                                for (let i = 0; i < x.starts; i++) {
                                                                    rows.push(<i className='bx bxs-star star-y'></i>)
                                                                }
                                                                return rows;
                                                            })()}
                                                            {(() => {
                                                                let rowss = [];
                                                                var qnt = 5 - x.starts;
                                                                for (let i = 0; i < qnt; i++) {
                                                                    rowss.push(<i className='bx bxs-star star-g'></i>)
                                                                }
                                                                return rowss;
                                                            })()}
                                                        </div>
                                                        <div className='genres'>
                                                            {x.genres.map((g) =>
                                                                <>
                                                                    <p onClick={() => { SetListFilters({ "name": genres.find(checkID, { param: g.id })?.name, "id": g.id }, "genre") }}>{genres.find(checkID, { param: g.id })?.name}</p>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <></>
                                            :
                                            <div className={`item [item-${x.id}]`}>
                                                <img src={x.img} />
                                                <p className='name '>{x.name}</p>
                                                <div className='popup'>
                                                    <p className='name'>{x.name}</p>
                                                    <p className='year'>{x.year}</p>
                                                    <p className='temp-eps'>{x.temps}</p>
                                                    <div className='stars'>
                                                        {(() => {
                                                            let rows = [];
                                                            for (let i = 0; i < x.starts; i++) {
                                                                rows.push(<i className='bx bxs-star star-y'></i>)
                                                            }
                                                            return rows;
                                                        })()}
                                                        {(() => {
                                                            let rowss = [];
                                                            var qnt = 5 - x.starts;
                                                            for (let i = 0; i < qnt; i++) {
                                                                rowss.push(<i className='bx bxs-star star-g'></i>)
                                                            }
                                                            return rowss;
                                                        })()}
                                                    </div>
                                                    <div className='genres'>
                                                        {x.genres.map((g) =>
                                                            <>
                                                                <p onClick={() => { SetListFilters({ "name": genres.find(checkID, { param: g.id })?.name, "id": g.id }, "genre") }}>{genres.find(checkID, { param: g.id })?.name}</p>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                            }
                        </>
                    )}
                </div>
            </div>
        </>
    );
}