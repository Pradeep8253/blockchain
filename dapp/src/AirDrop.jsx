import { React } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

function AirDrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirDropToUser() {
    const amount = document.getElementById("publicKey").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    alert("Airdrop  success");
  }

  return (
    <div>
      {wallet.publicKey ? (
        <p>Hi sir {wallet.publicKey.toString()}</p>
      ) : (
        <p>Please connect your wallet</p>
      )}{" "}
      <input id="publicKey" type="text" placeholder="Amount" />
      <button onClick={sendAirDropToUser}> Send AirDrop</button>
    </div>
  );
}

export default AirDrop;
