import { Text, Heading, VStack, Image } from "@chakra-ui/react";

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    {/* //target blank means clicking multiple exchange links will use a single tab not opening a new tab 
   for every click, _target opens new tab */}
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default ExchangeCard;
