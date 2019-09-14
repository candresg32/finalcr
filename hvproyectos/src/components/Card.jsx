import React, { Component } from "react";


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
                    }
    }

    render() {
        return (
            <div className="card col-12 col-md-3 my-3">
                <img src="https://i.ytimg.com/vi/ENKa1UsHU0w/hqdefault.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p1 className="card-text">{this.props.categoria}, {this.props.tipo}, {this.props.location}  </p1>
                    <p2 className="card-text">{this.props.seguimiento}, {this.props.observaciones} </p2>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        );
    }
}

export default Card;