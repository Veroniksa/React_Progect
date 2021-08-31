import React from "react";
/* export const Counter = () => {
    let count = 0;
    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>count++}>CLICK</button>
        </div>
    );
}; */

export class Counter extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        count: 0,
    };
}

    updateCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render(){
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.updateCount}>CLICK</button>
            </div>
        )
    }
}
