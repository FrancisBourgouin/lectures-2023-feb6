import React from "react";

export default class Spy extends React.Component {
  report = () => console.log("User clicked on the page!");

  componentDidMount() {
    document.addEventListener("click", this.report);
    console.log("SPY ACTIVATED");
  }

  componentDidUpdate(prevState, prevProps) {}

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
    console.log("SPY DEACTIVATED");
  }

  render() {
    return <h1>🥷🏻</h1>;
  }
}

// useEffect => Synchronisation / protect against weird sideeffects

// useEffect(() => {
//   const report = () => console.log("User clicked on the page!");

//   document.addEventListener("click", report);

//   return () => document.removeEventListener("click", report);
// })
