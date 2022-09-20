import React from "react";

function FilmList(props) {
    return (
        <>
            {props.movies.map((movie, index) => (
             <div className="card m-3">
                <img src={movie.Poster} alt='Poster'></img>
             </div>

            ))}
        </>
    );
};

export default FilmList;