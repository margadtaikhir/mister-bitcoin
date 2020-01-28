import React, { Component } from 'react';
import ContactService from '../services/ContactService';

import ContactList from '../cmps/ContactList.js';


export default class Contacts extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = async _ => {
        const contacts = await ContactService.getContacts();
        this.setState({ contacts });
    }

    render() {
        return <section>
            <header>
                <h1>Contact List</h1>
            </header>
            <ContactList contacts={this.state.contacts} />
        </section>
    }
}