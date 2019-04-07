import React, { Component } from 'react';
import getFodMaps from '../data/oldfoods';
import { Input, Table, TransitionablePortal } from 'semantic-ui-react';
import './body.css';
import getFoods from '../data/newfoods';

class Body extends Component {

    state = {
        foods: getFoods(),
        search: ''
    }

    doSearch = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    getTableRow = (food) => {
        return (
            <Table.Row>
                <Table.Cell>{food.name}</Table.Cell>
                <Table.Cell>{food.maxuse}</Table.Cell>
                <Table.Cell>{food.oligols}</Table.Cell>
                <Table.Cell>{food.fructose}</Table.Cell>
                <Table.Cell>{food.polyols}</Table.Cell>
                <Table.Cell>{food.lactose}</Table.Cell>
                <Table.Cell>{food.comments}</Table.Cell>
            </Table.Row>
        );
    }

    render() {
        return (
            <div>
                <div className="header sticky">
                    <Input id="input" type="text" onChange={this.doSearch} />
                </div>
                <div className="body">
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Food</Table.HeaderCell>
                                <Table.HeaderCell>Max. Use</Table.HeaderCell>
                                <Table.HeaderCell>Oligols</Table.HeaderCell>
                                <Table.HeaderCell>Fructose</Table.HeaderCell>
                                <Table.HeaderCell>Polyols</Table.HeaderCell>
                                <Table.HeaderCell>Lactose</Table.HeaderCell>
                                <Table.HeaderCell>Comments</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                (this.state.search === '') ?
                                    this.state.foods.map((food, index) => this.getTableRow(food)) :
                                    this.state.foods
                                        .filter(x => x.name.toLowerCase().includes(this.state.search.toLowerCase()))
                                        .map((food, index) => this.getTableRow(food))
                            }
                        </Table.Body>
                    </Table>
                    {/* <List>
                            {(this.state.search === '') ?
                                this.state.fodmaps.map((item, index) => (
                                    <List.Item key={index}>{item}</List.Item>))
                                :
                                this.state.fodmaps
                                    .filter(x => x.toLowerCase().includes(this.state.search.toLowerCase()))
                                    .map((item, index) => (
                                        <List.Item key={index}>{item}</List.Item>
                                    ))
                            }
                    </List> */}
                </div>
            </div>
        )
    }
}

export default Body;