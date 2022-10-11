import React from "react";
import Card from 'react-bootstrap/Card';

function FilmList(props) {
    return (
        <>
            {props.films.map((film, index) => (
             <Card className="image-container">
                <img src={film.Poster} alt='Poster'></img>
             </Card>

            ))}
        </>
    );
};

export default FilmList;