import React, { useState } from 'react'

function Table(props) {
    const [fullName,setFullName] = useState();
    const [address,setAddress] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [email,setEmail] = useState();


    const changeName = (e) => {
        setFullName(e.target.value);
    };

    const changeAdress = (e) => {
        setAddress(e.target.value);
    }

    const changePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const sendValue = (e) => {
        e.preventDefault();
        const values = {
            fullName,
            address,
            phoneNumber,
            email
        };
        props.func(values);
        clearState();
    }

    const clearState = () => {
        setFullName("");
        setAddress("");
        setPhoneNumber("");
        setEmail("");
    }

  return (
    <div>
        <h1>List</h1>
        <label>FullName</label>
        <input type="text" value={fullName} onChange={changeName}/>
        <label>Address</label>
        <input  type="text" value={address} onChange={changeAdress}/>
        <label>PhoneNumber</label>
        <input  type="number" value={phoneNumber} onChange={changePhoneNumber}/>
        <label>Email</label>
        <input type="email" value={email} onChange={changeEmail}/>
<button onClick={sendValue}>Click</button>

    </div>
  )
}

export default Table