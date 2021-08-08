import React from "react";
import "./HornedBeast.css"

class HornedBeast extends React.Component {
  render() {
        return (
            <div className="horned">
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} title={this.props.title} alt={this.props.title} />
                <p>{this.props.description}</p>
            </div>

        );
    }
}

export default HornedBeast;
