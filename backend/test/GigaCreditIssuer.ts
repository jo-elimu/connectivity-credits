import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("GigaCreditIssuer", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hre.ethers.getSigners();

        const GigaCredit = await hre.ethers.getContractFactory("GigaCredit");
        const gigaCredit = await GigaCredit.deploy();
        console.log('gigaCredit.target:', gigaCredit.target);

        const GigaCreditIssuer = await hre.ethers.getContractFactory("GigaCreditIssuer");
        const gigaCreditIssuer = await GigaCreditIssuer.deploy(gigaCredit.target);
        console.log('gigaCreditIssuer.target:', gigaCreditIssuer.target);

        return { gigaCredit, gigaCreditIssuer, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should have empty balances", async function () {
            const { gigaCreditIssuer } = await loadFixture(deployFixture);

            const schoolId: string = '0x97e173529c333b36afcbc85ca0970688';
            const schoolIdZeroPadded: string = ethers.zeroPadBytes(schoolId, 32);
            console.log('schoolIdZeroPadded:', schoolIdZeroPadded);
            const balance: bigint = await gigaCreditIssuer.balance(schoolIdZeroPadded);
            expect(balance).to.equal(0);
        });
    });

    describe("Issue credits", function () {
        it("Should issue credits", async function () {
            const { gigaCredit, gigaCreditIssuer, owner } = await loadFixture(deployFixture);

            await gigaCredit.mint(
                owner.address, ethers.parseEther("10")
            );

            await gigaCredit.approve(
                gigaCreditIssuer.target,
                ethers.parseEther("0.2")
            );

            const schoolId: string = '0x97e173529c333b36afcbc85ca0970688';
            const schoolIdZeroPadded: string = ethers.zeroPadBytes(schoolId, 32);
            console.log('schoolIdZeroPadded:', schoolIdZeroPadded);
            await gigaCreditIssuer.issueCredits(
                schoolIdZeroPadded,
                ethers.parseEther("0.20")
            );
            
            const schoolBalance: bigint = await gigaCreditIssuer.balance(schoolIdZeroPadded);
            expect(schoolBalance).to.equal(ethers.parseEther("0.20"));
            
            const contractBalance: bigint = await gigaCredit.balanceOf(gigaCreditIssuer.target);
            expect(contractBalance).to.equal(ethers.parseEther("0.20"));
        });
    });
});
