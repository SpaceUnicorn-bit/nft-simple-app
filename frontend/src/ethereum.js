import {ethers, Contract} from 'ethers';
import NFT from './contracts/NFT.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const nft = new Contract(
          //la direccion de la red 5777 solo es para ganache [window.ethereum.networkVersion] en testnet o mainet,
          NFT.networks[5777].address,
          NFT.abi,
          signer
        );

        resolve({nft});
      }
      resolve({nft: undefined});
    });
  });

export default getBlockchain;
