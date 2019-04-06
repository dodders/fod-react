import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class FoodList extends Component {

    constructor(props) {
        super(props)
        this.state= {
            fodmaps: this.props.fodmaps,
            searchTxt: this.props.searchTxt
        }
    }

    render() {
        return (
        );
    }
}

export default FoodList;