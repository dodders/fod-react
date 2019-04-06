import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        desc: "this is a description"
    }

    onIncrement = (event) => {
        this.setState({
            counter: this.state.counter + 1,
            desc: this.state.desc + ' ' + (this.state.counter + 1)
        })
    }
    onDecrement = (event) => {
        this.setState({
            counter: this.state.counter - 1,
            desc: this.state.desc + ' ' + (this.state.counter - 1)
        })
    }

    onText = (event) => {
        this.setState({
            counter: this.state.counter,
            desc: this.state.desc + event.target.value
        })
    }

    render() {
        return (
            <div>
                <p></p>
                <div>
                    <p>{this.state.counter}</p>
                    <p>{this.state.desc}</p>
                </div>
                <p>
                    <input type="text" onChange={this.onText} />
                </p>
                <button onClick={this.onIncrement} type="button">Increment</button>
                <button onClick={this.onDecrement} type="button">Decrement</button>
            </div>
        );
    }
}

export default Counter;