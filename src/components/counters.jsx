import React, { Component } from 'react';
import Counter from './counter';
// ngvhgvhgc

class counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 5},
            {id: 4, value: 7}
        ]
     };

    //  this method is our event handler
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {c.value = 0; return c;});
        this.setState({ counters })
    }

    render() {
        return (
            <div>
                <button onClick={(this.handleReset)} className='btn btn-primary btn-sm'>Reset</button>
                {/* key attribute is how we uniquley identify that component  */}
                {this.state.counters.map(counter => (
                <Counter key={counter.id} onDelete={this.handleDelete} counter={counter}  >
                    <h4 style={{marginLeft:"15%"}}>Title #{counter.id}</h4>
                </Counter>))}
            </div>
            
        );
    }
}

export default counters;