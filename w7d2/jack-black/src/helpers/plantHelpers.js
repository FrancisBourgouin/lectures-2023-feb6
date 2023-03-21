export const checkIfPlantIsWellWatered = (lastWatered, wateringInterval) => {
  const todayDate = new Date();
  const wateredDate = new Date(lastWatered);

  const diffInMs = todayDate.getTime() - wateredDate.getTime();
  const diffInS = diffInMs / 1000;
  const diffInDays = diffInS / 86400;

  return wateringInterval > diffInDays;
};
