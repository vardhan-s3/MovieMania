import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//  32dc8e69

const API_URL = 'http://www.omdbapi.com?apikey=32dc8e69';

const movie1 = {
        "Title": "Interstellar",
        "Year": "2014",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    }


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('Interstellar');
    }, []);
    
    
    
    return(
        <div className="app">
            <h1>MovieMania</h1>

            <div  className="search">
                <input type='text' 
                placeholder='Search Movie'
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}/>
                <img
                src={SearchIcon} 
                alt="Search Icon"
                onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie = {movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;