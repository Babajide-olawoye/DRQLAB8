
import React from 'react';
import axios from 'axios'

export class Create extends React.Component {

    constructor() {
        super();


        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: ' ',
            Year: ' ',
            Poster: ' '
        }

    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Movie add: " + this.state.Title +" "+this.state.Year +" " +this.state.Poster)
        
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/movies', newMovie)
        .then((res)=> {
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });

    }
    //allows html in JAVASCRIPT
    render() {
        //return html
        return (
            <div className='form'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text' className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add movie year:</label>
                        <input type= 'text'
                        className='form-control'
                        value={this.state.Year}
                        onChange = {this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Add movie poster:</label>
                        <textarea type= 'text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange = {this.onChangePoster}></textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='bt btn-primary'></input>
                    </div>
                </form>
            </div>

        );
    }
}

