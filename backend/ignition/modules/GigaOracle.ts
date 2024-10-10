// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GigaOracleModule = buildModule("GigaOracleModule", (m) => {
  const gigaOracle = m.contract("GigaOracle");

  return { gigaOracle };
});

export default GigaOracleModule;
