
import React from 'react';
import { Movie } from './movies';
import axios from 'axios';
export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    //setting movie array to data retrieved
                    this.setState({ movies: response.data })
                })
            .catch(
                (error) => { console.log(error) }
            );
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    //setting movie array to data retrieved
                    this.setState({ movies: response.data })
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
                <Movie movies={this.state.movies} ReloadData={this.ReloadData}></Movie>
            </div>

        );
    }
}

