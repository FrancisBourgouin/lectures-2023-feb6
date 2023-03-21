# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  lastWatered: "date",
  wateringInterval: 0,
};
```

## Plants

```jsx
const plants = [plant, plant]; // We use array since we don't want to modify

const plants = { id: plant, id: plant }; // A little too overkill for what we want
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-02-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-01-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-01-20",
  wateringInterval: 1000,
};

const plants = [plant1, plant2, plant3, plant4];
```

## Structure

### HTML

- body
  - header
    - h1 title
  - main
    - h1 list of plant title
    - ul
      - li
        - h1 name of plant
        - p type
        - p last watered date (color changing if well watered or not)

### Components

- App
  - Header
  - PlantList
    - PlantListItem

### Component Data

- App
  - Header (count of plants)
  - PlantList (array of plants)
    - PlantListItem (name, type, lastWatered, wateringInterval)
