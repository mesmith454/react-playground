import React from "react"

class Reservation extends React.Component {
    constructor(props) {
        super(props); 

        this.state = { 
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>Is going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChangeChange} />
                </label>
                <br />
                <label>
                    Number of Guests:
                    <input 
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests} onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Reservation;