import React from "react";

function Movie_detail(props) {
    
    const {location:{stats}, history} = props;
    if(!stats){
        history.push("/");
        return null;
    }else{
        return (
        <div className="movie">
            <h3 className="moive_title">{stats.title}</h3>
            <h1 className="moive_year">{stats.year}</h1>
            <img src={stats.poster}></img>
            <p>{stats.summary}</p>       
        </div>
        )
    }
}

export default Movie_detail;