import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;

  const emoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: 6 },
    4: { src: thumbsUp, alt: "recommended", boxSize: 6 },
    5: { src: bullsEye, alt: "exceptional", boxSize: 8 },
  };

  return <Image {...emoji[rating]} mt={1} />;
};

export default Emoji;
