import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class FoodList extends Component {

    constructor(props) {
        super(props)
        this.state= {
            fodmaps: this.props.fodmaps,
            search: this.props.search
        }
    }

    render() {
        return (
            <div>
                <p></p>
                <Table striped bordered>
                    <thead>
                        <tr>Fodmap</tr>
                    </thead>
                    <tbody>
                        {this.state.fodmaps.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FoodList;