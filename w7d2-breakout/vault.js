const createVault = () => {
  const vault = { money: 100 };

  const addMoney = (amount) => (vault.money = vault.money + amount);
  const checkMoney = () => console.log(vault);

  runSomething({ addMoney, checkMoney });

  // checkMoney();
};

const runSomething = (options) => {
  options.addMoney(300);

  options.checkMoney();
};

createVault();
