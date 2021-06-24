import React from "react";


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //lifecycle methods
    componentDidMount() {
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date ()
        });
    }

    render() {
        return (
            <div>
                <h2>It's {this.state.date.toLocaleTimeString()}. Let's Party!</h2>
            </div>
        );
    }
}

export default Clock;