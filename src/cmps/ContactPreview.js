import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPreview(props) {
    const imgURL = 'https://robohash.org/';
    const { contact } = props;
    return <Link to={`/contact/${contact._id}`}>
        <li className="contact-preview-container">
            <img src={imgURL + contact.name} alt="contact" />
            <h3>{contact.name}</h3>
        </li>
    </Link>
}