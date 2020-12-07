
import React from 'react';
import { Movie } from './movies';
import axios from 'axios';
export class Read extends React.Component {


    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    //setting movie array to data retrieved
                    this.setState({ movies: response.data.Search })
                })
            .catch(
                (error) => { console.log(error) }
            );
    }
    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div>
                <h1>This is my Reader</h1>
                <Movie movies={this.state.movies}></Movie>
            </div>

        );
    }
}

