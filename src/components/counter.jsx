// this is a component class from the react module has a bunch of methods we are going to inherit in the counter class
import React, { Component } from 'react'

// counter is a child class of counters component
class Counter extends Component {
    
    state = {
        // props allows you to reach the components attributes
        value: this.props.counter.value,
        address: {
            street: ''
        },
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1","tag2","tag3"],
        id: this.props.id
    };

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>'there are no tags'</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    // // this is called as an event handler so to fix the binding of this we had to use an arrow function.
    // handleIncrement = () => {
    //     // this.state.count++; this line of code wont work in react
    //     // were using setState which is a method inherited from the component class from react. setState will take an boject and or its property and set a new state. 
    //     this.setState({count: this.state.count + 1});
    // }

    handleIncrement = product => {
        console.log(product)
        this.setState({value: this.state.value + 1});
    }

    handleDecrement = product => {
        console.log(product)
        this.setState({value: this.state.value - 1});
    }

    changeImage = image => {
        this.setState({imageUrl: "https://avatars.githubusercontent.com/u/41357036?v=4"});
    }

    render() { 
        // every react component has a property called props which has all the components attributes
        // console.log("props", this.props);
        console.log(this.props)
        return (
            
            <React.Fragment>
                {this.props.children}
                <img onClick={() => this.changeImage({})} src={this.state.imageUrl} alt=""/>
                
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> */}
                <button onClick={() => this.handleIncrement({id: 1})} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.handleDecrement({id: 2})} className='btn btn-secondary btn-sm m-2'>Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // we are destructuring the state object. Picking the count property of the state object and storing it in seperate const called count
        const { value: count } = this.state;
        // checking if the count property in object equals 0. if so show zero else show counts value
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;


// React notes

// Props includes data that we give to a component and props is Read only and cannot change

// state included data that is local or private to that component only

// rule of thumb: the component that owns a piece of the state should be the component modefying that state.