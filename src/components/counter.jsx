import React, { Component } from 'react';
class Counter extends Component {
   state = {
        count:1,
        address:{
            street:'',
        }

   };
    render() { 
        React.createElement('h1');
        return <div>
        <span>{this.formatCount()}</span>
            <button>increment</button>
        
            </div>;
    }
    formatCount()
 {
     const {count}= this.state;
     return count ===0 ? "zero":count;
 }
}
 
export default Counter;