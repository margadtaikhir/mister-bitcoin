import React, { Component } from 'react';

export default class ContactsFilter extends Component {
    constructor(props) {
        super(props);
        this.filterInput = React.createRef();
    }

    state = {
        filterBy: { term: '' }
    }

    emitChange = _ => {
        this.setState({
            filterBy: {
                term: this.filterInput.current.value
            }
        }, _ => this.props.onFilter(this.state.filterBy)
        );
    }

    render() {
        return <section>
            <input ref={this.filterInput} onChange={this.emitChange} />
        </section>
    }
}