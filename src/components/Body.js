import React, { Component } from 'react';
import FoodSelector from './FoodSelector';
import FoodList from './FoodList';

class Body extends Component {
    render() {
        return (
            <div>
                <FoodSelector />
                <FoodList />
            </div>
        )
    }
}

export default Body;