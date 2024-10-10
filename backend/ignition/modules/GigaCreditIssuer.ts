// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GigaCreditIssuerModule = buildModule("GigaCreditIssuerModule", (m) => {
  const gigaCreditIssuer = m.contract("GigaCreditIssuer");

  return { gigaCreditIssuer };
});

export default GigaCreditIssuerModule;
