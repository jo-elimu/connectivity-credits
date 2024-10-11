// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import deployed_addresses from "../../ignition/deployments/chain-11155111/deployed_addresses.json";
const gigaCreditAddress: string = deployed_addresses["GigaCreditModule#GigaCredit"];
console.log('gigaCreditAddress:', gigaCreditAddress);

const GigaCreditIssuerModule = buildModule("GigaCreditIssuerModule", (m) => {
  const gigaCreditIssuer = m.contract("GigaCreditIssuer", [gigaCreditAddress]);
  return { gigaCreditIssuer };
});

export default GigaCreditIssuerModule;
