import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadcharacters } from "../Store/Posts";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadcharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Avatar The Last Airbender Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            {/* <h1>{character.name}</h1> */}
            <img
              src={character.photoUrl}
              alt="a picture of the character"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
