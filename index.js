import { ethers } from "ethers";

const rpcURL = "https://rpc.ankr.com/eth";
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const main = async () => {
  for (let i = 0; i < wallets.length; i++) {
    const balanceWETH = await provider.getBalance(wallets[i].address);

    const readableETH = ethers.utils.formatEther(balanceWETH);
    if (readableETH > 0) {
      console.log("********* FOUND ETH *****");
      console.log(`${wallets[i].address} has ${readableETH} ETH`);
      console.log("SeedPhrase: " + wallets[i].privateKey);
      break;
    }
    console.log(`${wallets[i].address} has ${readableETH} ETH`);
    console.log("SeedPhrase: " + wallets[i].seedPhrase);
  }
};

main();
