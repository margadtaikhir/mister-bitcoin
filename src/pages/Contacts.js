import React, { Component } from 'react';

import ContactService from '../services/ContactService';

import ContactList from '../cmps/ContactList.js';
import ContactFilter from '../cmps/ContactFilter';

export default class Contacts extends Component {
    state = {
        contacts: [],
        filterBy:{
            term: ''
        }
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = async _ => {
        const contacts = await ContactService.getContacts(this.state.filterBy);
        this.setState({ contacts });
    }

    onFilter = filterBy => {
        this.setState({ filterBy }, this.loadContacts);
    }

    render() {
        return <section>
            <header>
                <h1>Contact List</h1>
                <ContactFilter onFilter={this.onFilter} />
            </header>
            <ContactList contacts={this.state.contacts} />
        </section>
    }
}