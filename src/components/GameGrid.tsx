import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <div>
      <p>{error}</p>

      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
};

export default GameGrid;
