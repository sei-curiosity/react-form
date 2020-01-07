import React, {Component} from 'react';

class Movie extends Component{

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.director}</p>
                <button onClick={() => this.props.delete(this.props.id)}>Delete{this.props.id}</button>
            </div>
        )
    }
}


export default Movie;