import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 5},
            {id: 4, value: 7}
        ]
     }
    render() {
        return (
            <div>
                {/* key attribute is how we uniquley identify that component  */}
                {this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.value} selected={true}>
                    <h4 style={{marginLeft:"15%"}}>Title</h4>
                </Counter>))}
            </div>
            
        );
    }
}

export default counters;