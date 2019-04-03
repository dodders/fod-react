import React, { Component } from 'react';

class FoodList extends Component {

    constructor(props) {
        super(props)
        this.state={
            fodmaps: this.props.fodmaps
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.fodmaps.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
              </ul>
            </div>
        );
    }
}

export default FoodList;