import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Customer extends Component {
    state = {
        bgColor: this.props.color,
        // bgColor: this.props.colorDiff
    }
    render() {
        const tBody = { border: "1px solid #173f5f", backgroundColor: this.state.bgColor}
        return (
            // <tr onMouseLeave={() => this.setState({ bgColor: this.props.color })} onMouseOver={() => this.setState({ bgColor: "#173f5f" })}>
            <tr onMouseLeave={() => this.setState({ bgColor: this.props.colorDiff })} onMouseOver={() => this.setState({ bgColor: "#173f5f" })}>
                <td style={tBody}>{this.props.name}</td>
                <td style={tBody}>{this.props.email}</td>
                <td style={{ ...tBody, textAlign: "center" }}>{this.props.age}</td>
                <td style={{ ...tBody, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button onClick={()=>this.props.setName(this.props.name)}> Call my Name</button>
                </td>
            </tr>

        )
    }
}

Customer.propTypes={
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number

}
export default Customer
