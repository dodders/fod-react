import React, { Component } from 'react';
import FoodSelector from './FoodSelector';
import FoodList from './FoodList';

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fodmaps: props.fodmaps,
            search: props.search
        }
    }

    render() {
        return (
            <div>
                <FoodSelector />
                <FoodList fodmaps={this.state.fodmaps} search={this.state.search} />
            </div>
        )
    }
}

export default Body;