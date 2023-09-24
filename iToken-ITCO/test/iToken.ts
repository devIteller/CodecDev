import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";

describe("Token Contract", function () {
  it("Should Deploy Token Contract and Check Total Supply", async () => {
    const [owner, rando] = await hre.ethers.getSigners();
    
    let iToken = await ethers.deployContract("iToken");

    let decimals = 10n ** (await iToken.decimals());


    let totalSupply = await iToken.totalSupply();
    console.log(totalSupply / decimals);
    expect(totalSupply / decimals).to.equal(1000000000n);
  });

  it("Should Deploy Token Contract and name and Symbol", async () => {
    const [owner, rando] = await hre.ethers.getSigners();
    let iToken = await ethers.deployContract("iToken");
    console.log(await iToken.balanceOf("0x6DbC7634dEee8d09c82D2984b3739BEB264EBA61"))
    expect(await iToken.name()).to.equal("iToken")
    expect(await iToken.symbol()).to.equal("ITCO")
    



  })
  it("Should Deploy Token Contract and check balance", async () => {
    const [owner, rando] = await hre.ethers.getSigners();


    let iToken = await ethers.deployContract("iToken");
    let totalSupply = await iToken.totalSupply();
    expect(await iToken.balanceOf("0x6DbC7634dEee8d09c82D2984b3739BEB264EBA61")).to.equal(totalSupply)

  })
});
