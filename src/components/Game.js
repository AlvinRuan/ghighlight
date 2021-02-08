import React from "react";
// import style from "./game.css";

function Game({name, game_count, image_background}) {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{game_count}</h3>
            <img src={image_background} alt=""></img>
        </div>
    )

}

export default Game;