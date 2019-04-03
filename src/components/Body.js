import React, { Component } from 'react';
import FoodSelector from './FoodSelector';
import FoodList from './FoodList';
import getFodMaps from './../data/foods';

class Body extends Component {

    constructor(props) {
        super(props);
        const fods = getFodMaps();
        this.state = {
            fodmaps: fods
        }
    }

    render() {
        return (
            <div>
                <FoodSelector />
                <FoodList fodmaps={this.state.fodmaps} />
            </div>
        )
    }
}

export default Body;