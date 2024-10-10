import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("GigaCredit", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hre.ethers.getSigners();

        const GigaCredit = await hre.ethers.getContractFactory("GigaCredit");
        const gigaCredit = await GigaCredit.deploy();

        return { gigaCredit, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should set the right admin role", async function () {
            const { gigaCredit, owner } = await loadFixture(deployFixture);

            const roleHash: string = await gigaCredit.DEFAULT_ADMIN_ROLE();
            expect(await gigaCredit.hasRole(roleHash, owner.address)).to.be.true;
        });

        it("Should set the right minter role", async function () {
            const { gigaCredit, owner } = await loadFixture(deployFixture);

            const roleHash: string = await gigaCredit.MINTER_ROLE();
            expect(await gigaCredit.hasRole(roleHash, owner.address)).to.be.true;
        });
    });

    describe("Minting", function () {
        it("Should fail if role is not granted", async function () {
            const { gigaCredit, otherAccount } = await loadFixture(deployFixture);

            await expect(
                gigaCredit.connect(otherAccount).mint(otherAccount.address, ethers.parseEther("10"))
            ).to.be.revertedWithCustomError(
                gigaCredit, 'AccessControlUnauthorizedAccount'
            );
            expect(await gigaCredit.balanceOf(otherAccount.address)).to.equal(0);
        });

        it("Should succeed if role is not granted", async function () {
            const { gigaCredit, owner } = await loadFixture(deployFixture);

            await gigaCredit.mint(owner.address, ethers.parseEther("10"));
            expect(await gigaCredit.balanceOf(owner.address)).to.equal(ethers.parseEther("10"));
        });
    });
})
