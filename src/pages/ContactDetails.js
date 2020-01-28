import React, { Component } from 'react';
import ContactService from '../services/ContactService'

export default class ContactDetails extends Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.emailInput = React.createRef();
    }

    state = {
        contact: {
            name: 'Contact not found.'
        }
    }
    componentDidMount() {
        this.loadContact();
    }

    loadContact = async _ => {
        const contactId = this.props.match.params.id;
        const contact = await ContactService.getContactById(contactId);
        this.setState({ contact });
    }

    onDelete = async _ => {
        const contactId = this.state.contact._id;
        await ContactService.deleteContact(contactId);
        this.props.history.push('/');
    }


    render() {
        const imgURL = 'https://robohash.org/';
        const contact = this.state.contact;

        return <section className="contact-details-container">
            <img src={imgURL + contact.name} alt="contact" />
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>

            <button onClick={this.onDelete}>Delete Contact</button>
        </section>
    }
}