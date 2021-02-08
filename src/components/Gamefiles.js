// import axios from "axios";
import React, { useEffect, useState } from "react";
import Axios from "axios";
// import Game from "./Game";

function DownloadInfo() {
  const APP_ID = "34140858";
  const APP_KEY = "b5c07919424a1d8f26b889f0ebaea2bf";

 const[counter,setCounter] = useState([]);

Axios.get(`https://api.edamam.com/search?q=chicken&app_id=34140858&app_key=b5c07919424a1d8f26b889f0ebaea2bf`)
.then(response => {
  // console.log(response);
  setCounter(response);
})
console.log(counter);
  //-------------------------------------
  // const [games, setGames] = useState([]);

  // axios.get("https://api.rawg.io/api/platforms?key=0d34d65e69c5405f8aecf425f973f5dd")
  // .then(response => {
  //   setGames(response.data.results);
  //   // console.log(response.data.results);
  // });
  //-------------------------------

  return (
    <div>
      <div>
        {/* <h1>{counter}</h1> */}
        {/* <h1 onClick={() => setCounter(counter+1)}>Click Me!</h1> */}
      </div>
    </div>
  );
}

export default DownloadInfo;
