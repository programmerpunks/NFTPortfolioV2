import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import { ContractABI } from "./Contract";

function Mint({
  wallet,
  price,
  images,
  userMintedAmount,
  maxMintAmount,
  disconnect,
  connection,
  readContract,
  getTokens,
}) {
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState(false);

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };
  const mint = async (mintAmount) => {
    setCheck(!check);
    if (wallet === "Connect a Wallet") {
      notify("Connect a Wallet First!");
      return;
    } else {
      await readContract();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        REACT_APP_CONTRACT_ADDRESS,
        ContractABI,
        signer
      );
      try {
        const response = await contract.mint(mintAmount, {
          value: ethers.utils.parseEther((price * mintAmount).toString()),
        });
        await response.wait();
        toast.success("Transaction Successful.", {
          toastId: "custom-id-yes",
        });
        setCheck(!check);
      } catch (error) {
        setCheck(!check);
        notify(error.reason);
      }
    }
  };
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", async () => {
        await disconnect();
      });
      window.ethereum.on("accountsChanged", async () => {
        await disconnect();
        await connection();
        await readContract();
        await getTokens();
      });
    }
  });
  const initialFun = async () => {
    await connection();
    await readContract();
    await getTokens();
  };
  useEffect(() => {
    initialFun();
  }, []);

  return (
    <>
      <div className="text-white text-2xl text-center font-bold bg-blue-light pb-5 bg-opacity-80">
        <div>
          Total minted: {userMintedAmount}/{maxMintAmount}
        </div>
        <div>The Price is {price}eth ETH + Gas Fee</div>
        <div className=" py-5 flex justify-center">
          <div className="outline flex px-20 py-5">
            <button
              class="btn2 px-5 py-2 relative border text-white border-white uppercase font-semibold "
              type="button"
              onClick={() => {
                setAmount(amount - 1);
              }}
            >
              -
            </button>
            <p className="px-10 mt-1">{amount}</p>
            <button
              class="btn2 px-5 py-0 relative border text-white border-white uppercase font-semibold "
              type="button"
              onClick={() => {
                setAmount(amount + 1);
              }}
            >
              <span class="absolute inset-0 bg-yelloww"></span>
              <span class="absolute inset-0 flex justify-center items-center font-bold">
                +
              </span>
              +
            </button>
            <button
              class="btn2 px-5 py-0 relative ml-20 text-white  uppercase font-semibold "
              type="button"
              onClick={async () => {
                await mint(amount);
                await readContract();
                await getTokens();
              }}
            >
              <span class="absolute inset-0 bg-yelloww"></span>
              <span class="absolute inset-0 flex justify-center items-center font-bold">
                Mint
              </span>
              Mint
            </button>
          </div>
        </div>
      </div>
      <div className="text-white justify-center px-10 py-10 grid text-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {images.map((image, key) => {
          return (
            <div className="p-8 border border-white/100">
              <div className="bg-white/100 flex justify-center border border-white/80 anm">
                <img src={image} alt="" className="h-auto w-auto" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mint;
