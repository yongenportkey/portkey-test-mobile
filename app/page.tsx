"use client";

import { SignIn, PortkeyProvider } from "@portkey/did-ui-react";
import "@portkey/did-ui-react/dist/assets/index.css";
import { useRef } from "react";

import { ConfigProvider } from "@portkey/did-ui-react";

ConfigProvider.setGlobalConfig({
  requestDefaults: {
    baseURL: "https://aa-portkey-test.portkey.finance",
  },
  graphQLUrl:
    "https://dapp-aa-portkey-test.portkey.finance/Portkey_V2_DID/PortKeyIndexerCASchema/graphql",
  socialLogin: {
    Portkey: {
      websiteName: "example",
      websiteIcon: "https://portkey.finance/favicon.ico",
    },
  },
});

const Home: React.FC = () => {
  const ref = useRef();

  const onFinish = (result) => {
    // Modify the value corresponding to the following fields
  };

  return (
    <PortkeyProvider networkType={"TESTNET"}>
      <button onClick={() => ref.current.setOpen(true)}>login</button>
      <SignIn ref={ref} onFinish={onFinish} />
    </PortkeyProvider>
  );
};

export default Home;
