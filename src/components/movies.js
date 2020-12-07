
import React from 'react';
import { MovieItem } from './movieItem';

export class Movie extends React.Component {

    //allows html in JAVASCRIPT
    render() {

        //return html
        return this.props.movies.map((movie)=>{
            return <MovieItem movie = {movie}></MovieItem>
        })
    }
}

