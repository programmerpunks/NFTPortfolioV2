import React, { useEffect, useState } from "react";
import Aos from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import { toast, ToastContainer } from "react-toastify";

import About from "./components/about";
import { ContractABI } from "./content/Mint/Contract";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Mint from "./components/Mint/Mint.jsx";
import Navbar from "./components/navbar";
import RoadMapCarosual from "./components/roadmap";
import Team from "./components/team/Team";
import Utility from "./components/utility/Utility.jsx";

import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

function App() {
  const [images, setImages] = useState([]);
  const [logout, setLogout] = useState(false);
  const [maxMintAmount, setMaxMintAmount] = useState();
  const [price, setPrice] = useState(0);
  const [userMintedAmount, setUserMintedAmount] = useState(0);
  const [wallet, setWallet] = useState("Connect a Wallet");

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;
  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;

  const connection = async () => {
    const res = await setupConnections();
    if (res === false) {
      setWallet("Connnect a Wallet");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: REACT_APP_NETWORK_CHAIN_ID }],
      });
    } else {
      setLogout(true);
      setWallet(res.slice(0, 6) + "..." + res.slice(36, 42));
    }
  };

  const disconnect = async () => {
    setWallet("Connect a Wallet");
    setLogout(false);
    setUserMintedAmount(0);
    setMaxMintAmount("-");
    setPrice("-");
    setImages([]);
  };

  const getTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const imagesTockens = await contract.nftsOnwedByWallet(address);
    let imagesLocal = [];
    await imagesTockens.map(async (image) => {
      const url = await contract.tokenURI(parseInt(image, 10));
      let result = await url.replace("ipfs://", "https://ipfs.io/ipfs/");
      const jsonBody = await (await fetch(result)).json();
      imagesLocal.push(
        await jsonBody.image.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
    });
    setTimeout(() => {
      setImages(imagesLocal);
    }, [3000]);
  };
  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };

  const readContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    const maxMintAmount = await contract.maxMintAmount();
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const userMintedAmount = await contract.balanceOf(address);
    const price = await contract.cost();
    setMaxMintAmount(parseInt(maxMintAmount, 10));
    setUserMintedAmount(parseInt(userMintedAmount, 10));
    setPrice(Number(ethers.utils.formatEther(price)));
  };

  const setupConnections = async () => {
    if (window.ethereum != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (REACT_APP_NETWORK !== network.name) {
        notify(
          `Not on a correct network. Change your network to "${REACT_APP_NETWORK}"`
        );
        return false;
      } else {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        return address;
      }
    } else {
      notify("No Ether wallet available");
      return false;
    }
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
    connection();
  }, []);
  return (
    <>
      <div className="bg-star-img bg-cover px-[1%] md:px-[10%] lg:px-[20%] w-full">
        <Navbar
          connection={connection}
          disconnect={disconnect}
          getTokens={getTokens}
          logout={logout}
          readContract={readContract}
          wallet={wallet}
        />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Landing />
                  <About />
                  <RoadMapCarosual />
                  <Utility />
                  <Team />
                </>
              }
            />
            <Route
              exact
              path="/mint"
              element={
                <>
                  <Mint
                    connection={connection}
                    disconnect={disconnect}
                    getTokens={getTokens}
                    images={images}
                    maxMintAmount={maxMintAmount}
                    price={price}
                    readContract={readContract}
                    userMintedAmount={userMintedAmount}
                    wallet={wallet}
                  />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-center" autoClose={2000} />
        <Footer />
      </div>
    </>
  );
}

export default App;
