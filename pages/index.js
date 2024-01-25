import { useEffect, useMemo, useState } from "react";
import Main from "./Main";
import { RPC_ENDPOINT } from "../utils";

import { ConnectionProvider } from "@solana/wallet-adapter-react";

export default function Home() {
  return <Main />;
}
