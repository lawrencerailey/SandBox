import React, {Component} from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
    constructor(props){
        super(props) 

        this.state = {
            count: props.initialNumber
        }
    }
    
    changeCount (num) {
        this.setState(prevState => {
            return { count: prevState.count + num }
        })
    }

    render(){
        return ( 
            <ThemeContext.Consumer>
                {style => (
                <div>
                <button style={style} className="btn" onClick={() => this.changeCount(-1)}>Minus</button>
                <span>{this.state.count}</span>
                <button style={style} className="btn" onClick={() => this.changeCount(1)}>Plus</button>
                </div>
                
                )}
            </ThemeContext.Consumer>
        )
    }
}