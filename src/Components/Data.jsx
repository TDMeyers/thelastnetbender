
import React from "react"
import { useState, useEffect } from "react";

export default function GetCharacters() {
  const [characters, setCharacters] = useState([]);
  const api = "https://last-airbender-api.fly.dev/api/v1/characters/";

  useEffect(() => {
    const fetchCharacterData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setCharacters(data);
    };
    fetchCharacterData();
  }, []);

  function Loaded() {
    return (
      <div>
        {characters.map((character) => (
          <div key={character._id}>
            <h1>{character.name}</h1>
            <br />
            <img src={character.photoUrl} alt="picture of the character" />
            {/* <h4>{character.affiliation}</h4> */}
          </div>
        ))}
        testing
      </div>
    );
  }

  function Loading() {
    return <div>Loading...</div>;
  }

  return characters ? Loaded() : Loading();
}



