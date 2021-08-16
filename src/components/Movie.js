import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({id,title,summary,poster,year ,genres}){
 return (
        <Link to={{
            pathname: `/movie/${id}`,
            stats: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <h3 className="moive_title">{title}</h3>
                <h1 className="moive_year">{year}</h1>
                <img src={poster}></img>
                <p>{summary}</p>
                <ul className="genres"> {genres.map((genre, idx) => <li key={idx} className="genresP_genre">{genre}</li>)}</ul>          
            </div>
        </Link>
    );
}
Movie.propTypes ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;