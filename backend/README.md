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

```sh
# rm ./ignition/deployments/
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```
