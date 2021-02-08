import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Rows";
// import Game from "./Game";

function DownloadInfo() {
  const APP_ID = "34140858";
  const APP_KEY = "0d34d65e69c5405f8aecf425f973f5dd";
  const genres = [];

  async function makeRequest() {
    const config = {
      method: "get",
      url: `https://api.rawg.io/api/genres?key=${APP_KEY}`,
    };

    let res = await axios(config);
    res.data.results.forEach((result) => genres.push(result.name));
    console.log(genres);
  }
  makeRequest();

  return (
    <div>
      <Row title="Gaming"></Row>
      <Row title="Gaming2"></Row>
    </div>
  );
}

export default DownloadInfo;

//  const[counter,setCounter] = useState([]);

// Axios.get(`https://api.edamam.com/search?q=chicken&app_id=34140858&app_key=b5c07919424a1d8f26b889f0ebaea2bf`)
// .then(response => {
//   // console.log(response);
//   setCounter(response);
// })
// console.log(counter);
//-------------------------------------
// const [games, setGames] = useState([]);

// axios.get("https://api.rawg.io/api/platforms?key=0d34d65e69c5405f8aecf425f973f5dd")
// .then(response => {
//   setGames(response.data.results);
//   // console.log(response.data.results);
// });
//-------------------------------
