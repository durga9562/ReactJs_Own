import React from 'react'
import {useEffect,useState} from "react";
import "./Reac.css"


function Read() {
    const[post,setPost] = useState([]);
    useEffect(() => {
       getUsers(); 
    },[])
 function getUsers(){
    fetch("http://localhost:8080/countries")
    .then((result) => {
        result.json().then((response) => {
            setPost(response);
        })
    })
 }

    return (
       <div>
        <table className="table1"  >
            <tbody >
                <tr>
                    <td>CountryId</td>
                    <td>CountryName</td>
                </tr>
                {post.map((item,i)=>
                <tr key={i}>
<td >{item.country_id}</td>
<td>{item.country_name}</td>
                </tr>
                )}
            </tbody>
        </table>
       </div> 
    )
}

export default Read
