import React, { Component } from 'react';
class Counter extends Component {
   state = {
        count:0,
        address:{
            street:'',
        }

   };
 
 /*  constructor()
   {
       super();
       this.Incrementn = this.Incrementn.bind(this);
   }*/
   Incrementn = ()=>
   {
       console.log("Incrementando "+this);
       this.setState({count:this.state.count + 1});
   }
   Decrement =  ()=>
   {
    this.setState({count:this.state.count - 1});
   }
   Showdrement = ()=>
   {
    let pruea = this.state.count >0 ?
    <button
    onClick={this.Decrement}
    className="btn btn-danger btn-sm"
    >
        Decrement
        </button>:" " ;
    return pruea;
   }
    render() { 
        React.createElement('h1');
        return <div>
        <span className={this.Getbadgeclasses()}>{this.formatCount()}</span>
            <button onClick={this.Incrementn}
           className="btn btn-secondary btn-sm"
           >
                increment
            </button>
            <span>{this.Showdrement()}</span>
     
            </div>;
    }
    formatCount()
 {
     const {count}= this.state;
     return count ===0 ? "zero":count;
 }
    Getbadgeclasses()
    {
        let classes = "badge m-2 badge-";
        classes+= this.state.count ===0 ?"warning":"primary";
        return classes;
    }
 
}
 
export default Counter;