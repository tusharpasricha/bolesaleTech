import React, { useContext } from 'react';
import AuthContext from '../stores/AuthContext';
import { useState } from 'react';
import { db } from '../data/firebase';
import { collection, addDoc } from "firebase/firestore";


const Getintouch = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');

    // const db = getFirestore();

    const { logout } = useContext(AuthContext);

    const logoutHandler = () => {
        logout().then(() => {
            console.log('Logout Successful');
        }).catch(err => {
            console.log(err);
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addDoc(collection(db, "purpose"), {
            name,email,contactNumber,purpose,message
        }).then(() => {
            console.log('Added');
            alert('Added');
            e.target.reset();
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <>
        <form onSubmit={submitHandler}>
        <h2>Get in Touch</h2>
      <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="contactNumber">Contact Number</label>

            <input type="text" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
            <label htmlFor="purpose">Purpose</label>

            <input type="text" value={purpose} onChange={e => setPurpose(e.target.value)} />
            <label htmlFor="message">Message</label>

            <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        <button onClick={logoutHandler}>Logout</button>
        </>
    )
}

export default Getintouch;