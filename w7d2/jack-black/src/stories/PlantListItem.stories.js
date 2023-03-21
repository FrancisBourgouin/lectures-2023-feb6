import { storiesOf } from "@storybook/react";
import PlantListItem from "../components/PlantListItem";

const wellWateredPlant = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-03-20",
  wateringInterval: 7,
};
const badlyWateredPlant = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-02-20",
  wateringInterval: 7,
};

storiesOf("PlantListItem", module)
  .add("Well watered plant", () => <PlantListItem {...wellWateredPlant} />)
  .add("Badly watered plant", () => <PlantListItem {...badlyWateredPlant} />);
