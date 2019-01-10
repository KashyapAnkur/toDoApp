import React from 'react';
import ReactDOM from 'react-dom';
import Style from './Style.css';


class TodoPracLS extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list:[],
            cls:0
        };
        this.originalList = []
    }

    componentWillMount(){
        let checkVal = localStorage.getItem('data');
        if (checkVal){
            this.originalList = checkVal.length > 0 ? JSON.parse(checkVal) : [];
        }
        
        this.setState({
            list:this.originalList
        });
    }

    insert = (e) => {
        let val = e.target.value;
        let newArrayCount = 0;

        e.target.value = val.replace(/[^0-9a-zA-Z\. !@#$%^&*()_+=-{}[]":;'?><,.\/]/g,''); // removes space
        //search

        this.newMatchedArray = [];
        for (let i=0;i<this.originalList.length;i++){
            for (let j=0;j<this.originalList[i].length;j++){
                if (this.originalList[i].substr(j,val.length) === val){
                    this.newMatchedArray[newArrayCount] = this.originalList[i];
                }
            }
            newArrayCount++;
        }

        if (val.length > 0){
            this.setState({
                list:this.newMatchedArray
            });
            if(this.state.cls == 0){
                this.state.cls = 1;
            } else {
                this.state.cls = 0;
            }
            console.log(this.state.cls);

        } else {
            this.setState({
                list:this.originalList // original array
            });
        }
        //search
    
        //insert
        if (e.keyCode === 13 && val.length > 0){ // if enter pressed then data will be saved
            this.setState({
                list:this.originalList
            });
            e.target.value = '';
            this.originalList.push(val);
            localStorage.setItem('data',JSON.stringify(this.originalList));
        }
        //insert
    }

    remove = (index) => {
        let newArr = [...this.state.list];
        newArr.splice(index,1);
        this.setState({
            list:newArr
        });
        this.originalList.splice(index,1);
        if (localStorage.getItem('data').length < 1 ){
            localStorage.setItem('data','');
        } else {
            localStorage.setItem('data',JSON.stringify(newArr));
        }
        document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
    }

    render(){
        return (
            <React.Fragment>
                <center><h1 className="todo">To Do List </h1><br />
                <input type='text' placeholder="Enter todo" className="input" maxLength="20" onKeyUp={this.insert}/>
                <ul>{this.state.list.map((data,index) => <li key={'key' + index}>{data}<input className="delete" type='button' onClick={() => this.remove(index)}/></li>)}</ul>
                </center>
            </React.Fragment>
        );
    }
}

export default TodoPracLS;