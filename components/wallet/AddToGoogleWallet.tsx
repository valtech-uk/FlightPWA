import React, { FunctionComponent } from "react";
import LinkButton from "../general/linkButton";
import {useAppContext} from "../../context/appContext";

interface AddToGoogleWalletProps { children: React.ReactNode; }

const AddToGoogleWallet: FunctionComponent<AddToGoogleWalletProps> = (props) => {
  const {context} = useAppContext();

  const params = new URLSearchParams({
    userId: `${context.user.id}`,
    userName: `${context.user.username}`
  });

  return (
    <>
      <img src="/wallet.png" />
      <LinkButton href={ `/api/google-wallet/boarding-pass?${ params.toString() }` }>{ props.children }</LinkButton>
    </>
  );
};

export default AddToGoogleWallet;
