import { Card, Text } from "@mantine/core";

type DisplayCardProps = {
  label: string;
  amount: number;
  color: string;
};

const DisplayCard = ({ label, amount, color }: DisplayCardProps) => {
  return (
    <Card
      shadow="sm"
      p="xl"
      mb={50}
      style={{ height: "200px", textAlign: "center", backgroundColor: "white", color: "Black", borderRadius:30 }}
    >
      <Text weight={500} size={35} mt="md">
        {label}
      </Text>
      <Text mt="xs" size={35} color={color} weight={500}>
        ${amount.toLocaleString("en-US")}
      </Text>
    </Card>
  );
};

export default DisplayCard;
