import React from 'react';

class Form extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name:"india"
        };
    }

    changee = (e) => {
        this.setState({
            name:e.target.value
        });
    }

    render(){
        return(
            <React.Fragment>
                <form>
                <select value={this.state.name}>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="japan">Japan</option>
                    <option value="africa">Africa</option>
                </select>
                <select  onChange={this.changee}>
                <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="japan">Japan</option>
                    <option value="africa">Africa</option>
                </select>
                </form>
            </React.Fragment>
        );
    }
}

export default Form;