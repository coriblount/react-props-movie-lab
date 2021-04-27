import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {



  // {
  //   title: 'Choux and Maru go to Istanbul',
  //   IMDBRating: 3,
  //   genres: ['cats', 'adventure', 'romance'],
  //   poster: 'choux-maru-istanbul'
  // },


  generateMovieCards = () => {
    return movieData.map(movie => {
      return(
        <MovieCard 
        title={movie.title}
        IMDBRating={movie.IMDBRating}
        genre={movie.genre}
        poster={movie.poster}
        />
      )
    })
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        <MovieCard />
      </div>
    )
  }
}

