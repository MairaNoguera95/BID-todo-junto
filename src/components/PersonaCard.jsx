import { Component } from "react";
class PersonaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: parseInt(this.props.age)
        };
    }
    render() { 
        const { lastName, firstName, hairColor} = this.props;
        return (
        <>
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.count}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={()=> this.setState({count: this.state.count+1})}>Birthday Button for {lastName}{firstName}</button>
        </div>
        </>);
    }

}
export default PersonaCard;