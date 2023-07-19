import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {games.map((game) => (
          <GameCards key={game.id} game={game}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
