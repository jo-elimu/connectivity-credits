# Backend

## Compile 🧹

```sh
npm install
npx hardhat clean
npx hardhat compile
```

## Test ☑️

```sh
npx hardhat test
npx hardhat coverage
npx istanbul check-coverage --lines 80
```

## Deploy 🚀

### Hardhat Network

```sh
# rm ./ignition/deployments/
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/GigaOracle.ts --network localhost
npx hardhat ignition deploy ./ignition/modules/GigaCredit.ts --network localhost
npx hardhat ignition deploy ./ignition/modules/GigaCreditIssuer.ts --network localhost
```

### Sepolia Testnet

```sh
# rm ./ignition/deployments/
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/GigaOracle.ts --network sepolia --verify
npx hardhat ignition deploy ./ignition/modules/GigaCredit.ts --network sepolia --verify
npx hardhat ignition deploy ./ignition/modules/GigaCreditIssuer.ts --network sepolia --verify
```
