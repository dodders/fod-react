import React, { Component } from 'react';
import getFodMaps from '../data/foods';
import { Table } from 'react-bootstrap';

class Body extends Component {

    state = {
        fodmaps: [],
        search: ''
    }

    componentDidMount() {
        var fods = getFodMaps();
        this.setState({
            fodmaps: fods,
            search: this.state.search
        })
    }

    doSearch = (event) => {
        this.setState({
            fodmaps: this.state.fodmaps,
            search: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input id="search" type="text" onChange={this.doSearch} />
                </div>
                <div>
                    <Table striped bordered>
                        <tbody>
                            {(this.state.search === '') ?
                                this.state.fodmaps.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item}</td>
                                    </tr>))
                                :
                                this.state.fodmaps
                                    .filter(x => x.includes(this.state.search))
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item}</td>
                                        </tr>))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Body;