import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge fontSize="sm" px={2} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
