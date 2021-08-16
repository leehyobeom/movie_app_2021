import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { tsThisType } from "@babel/types";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component {

  state = {
    isLoading: true,
    movies:[]
  }

  getMovies = async () =>{
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies , isLoading:false});
  }
  render(){
    const {isLoading, movies} = this.state;
    return <section className="contaner">{isLoading? 
      
    (<div>
    <span className="loader_text">loading...</span>
    </div>)
    
    : (
      <div className="movies">
        {movies.map(movie => {
         return  <Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            poster={movie.medium_cover_image} 
            summary={movie.summary}
            genres={movie.genres}  />})}
      </div>
    )
  }
  </section>
  }
    // movies.map(movie => {
    //   return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} poster={movie.medium_cover_image} summary={movie.summary} />
    // })}</section>
  
  componentDidMount(){
    this.getMovies();
  }
}

export default Home;


