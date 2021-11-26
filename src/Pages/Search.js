import React from 'react'
import "./Search.css"
import JSONDATA from "../MOCK_DATA.json"
import { useState } from 'react'
const Search = () => {

    const [items,setItems] = useState(JSONDATA)

    const [searchTerm,setSearchterm] = useState('')

    const filterItem = (caregItem)=>{
        const updatedItems = JSONDATA.filter((curElem)=>{
            return curElem.gender === caregItem
        })
        setItems(updatedItems)
    }

    return (
        <section className="search">
            <div className="searchbar">
                <input type="text" placeholder="search here" onChange={event =>{setSearchterm(event.target.value)}}/>
            </div>
            {JSONDATA.filter((val)=>{
                if(searchTerm === "") {
                    return val
                }
                else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val,key)=>{
                return <div key={key}>{val.first_name}</div>
            })}




            <button className="btn" onClick={()=>filterItem('Male')}> hello</button>


        </section>
    )
}

export default Search
