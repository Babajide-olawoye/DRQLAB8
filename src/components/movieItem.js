import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

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
                </Card>

            </div >

        );
    }
}

