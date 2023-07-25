import { useState, useEffect } from "react";

export default async function getCharacters() {
  const [characters, setCharacters] = useState([]);
  const api = "https://last-airbender-api.fly.dev/api/v1/characters/";

  useEffect(() => {
    const fetchCharacterData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setCharacters(data);
    };
    fetchCharacterData();
    console.log(characters);
  }, []);

  function loaded() {
    return (
      <div>
        testing
        <h1>{characters.name}</h1>
        <img
          src={characters.photoUrl}
          alt="picture of the character"
        />
      </div>
    );
  }
}

// GET /api/v1/characters -> get all characters (default 20 per page)
// GET /api/v1/characters/CHARACTER_ID
// base url = https://last-airbender-api.fly.dev/api/
// form data = https://last-airbender-api.fly.dev/api/characters/${input}
// /api/v1/characters/random -> get random character
// GET /api/v1/characters/avatar
// get characters w/ specific affiliation = GET /api/v1/characters?affiliation=NATION+NAME

// `https://last-airbender-api.fly.dev/api/v1/characters?affiliation=${input}`

// 1. set a fixed api call to get a list of results in Data - only yields 20 results, or needs pagination
// 2. set up a formated api call and pass params in to get different results
