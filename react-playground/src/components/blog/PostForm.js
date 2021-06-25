import React from "react"

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Let er rip braaaah'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Post:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label> 
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default EssayForm;