import { mnemonicToSeed } from "bip39";
import { useState } from "react";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

function SolanaWallet({ mnemonic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);

  return (
    <div>
      <button
        onClick={async function () {
          const seed = await mnemonicToSeed(mnemonic);
          const path = `m/44'/501'/${currentIndex}'/0'`;
          const derivationPath = derivePath(path, seed.toString("hex")).key;
          const secret = nacl.sign.keyPair.fromSeed(derivationPath).secretKey;
          const keyPair = Keypair.fromSecretKey(secret);
          setCurrentIndex(currentIndex + 1);
          setPublicKeys([...publicKeys, keyPair.publicKey]);
        }}
      >
        Add SOL Wallet
      </button>

      {publicKeys.map((p) => (
        <div> {p.toBase58()}</div>
      ))}
    </div>
  );
}

export default SolanaWallet;
