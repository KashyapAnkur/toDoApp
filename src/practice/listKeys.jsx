import React from 'react';

let g = "PUCHUN"; 


class ListKeys extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         time: new Date()
        }
        //this.vicky = this.vicky.bind(this);
    }
    
    timer = () =>{
     setInterval((e)=>{
        this.setState({time: new Date()});
     },1000);
    }


    render(){
        return(
            <React.Fragment>
                {/* <button onClick={this.vicky}>Click</button><br/> */}
                <h1>Clock:</h1>
                <h3>{this.state.time.toLocaleTimeString()}</h3>
                <button onClick={this.timer}>start</button>
            </React.Fragment>
        );
    }

  
}

export default ListKeys;