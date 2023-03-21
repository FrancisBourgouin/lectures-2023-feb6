import { storiesOf } from "@storybook/react";
import PlantList from "../components/PlantList";
import { plants } from "../data/plantData";

storiesOf("PlantList", module)
  .add("With a valid list of plants", () => <PlantList plants={plants} />)
  .add("With an invalid list of plants", () => <PlantList />);
