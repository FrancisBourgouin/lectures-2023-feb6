import { storiesOf } from "@storybook/react";
import Header from "../components/Header";

storiesOf("Header", module)
  .add("With multiple plants", () => <Header count={6} />)
  .add("With one plant", () => <Header count={1} />)
  .add("With no plants", () => <Header />);
