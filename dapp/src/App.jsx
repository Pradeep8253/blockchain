import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import "./App.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import AirDrop from "./AirDrop";

function App() {
  return (
    <ConnectionProvider
      endpoint={"https://solana-devnet.g.alchemy.com/v2/go0_Hr2sKlbG0hcywOcRY"}
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <h1>Good Morning </h1>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <AirDrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
