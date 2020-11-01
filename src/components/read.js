import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        movies: [
        ]

    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(

                (response) => { // set array from JSON to movies array
                    this.setState({ movies: response.data.Search }) 
                })
            .catch((error) => { //  if error tell console
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}