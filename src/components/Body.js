import React, { Component } from 'react';
import getFodMaps from '../data/foods';
import { Input, List } from 'semantic-ui-react';

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
                    <Input id="search" type="text" onChange={this.doSearch} />
                    {/* <input id="search" type="text" onChange={this.doSearch} /> */}
                </div>
                <div>
                    <List>
                            {(this.state.search === '') ?
                                this.state.fodmaps.map((item, index) => (
                                    <List.Item>{item}</List.Item>))
                                :
                                this.state.fodmaps
                                    .filter(x => x.includes(this.state.search))
                                    .map((item, index) => (
                                        <List.Item>{item}</List.Item>
                                    ))
                            }
                    </List>
                </div>
            </div>
        )
    }
}

export default Body;