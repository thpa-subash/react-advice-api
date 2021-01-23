import React from 'react';
const MoviesList = (props) => {
     










    return (
        <div>
            {
                props.movies.map((movie, index) => 
            <div className="card">
                {movie.title}
                    <img src={movie.thumbnailUrl} alt={movie.title}/>
                    </div>)
            }
        </div>
    )
}
export default MoviesList;