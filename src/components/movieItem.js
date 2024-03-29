import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import axios from 'axios'

export class MovieItem extends React.Component {

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: "+this.props.movie._id);
       
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }
    
    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4> {this.props.movie.year} </h4>
                            <p><img src={this.props.movie.poster}></img></p>

                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" +this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant ="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>

            </div >

        );
    }
}

