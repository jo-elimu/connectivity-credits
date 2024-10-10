// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GigaCreditModule = buildModule("GigaCreditModule", (m) => {
  const gigaCredit = m.contract("GigaCredit");

  return { gigaCredit };
});

export default GigaCreditModule;
