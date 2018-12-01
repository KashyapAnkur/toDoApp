import React from 'react';


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }

    proceed = () => {
        this.setState({
            date:new Date()
        })
    }
    componentDidMount(){
        setInterval(() => {
            this.proceed();
        },1000);
    }

    render(){
        return (
            <React.Fragment>
                {this.state.date.toLocaleTimeString()}
            </React.Fragment>
        );
    }
}

export default Timer;