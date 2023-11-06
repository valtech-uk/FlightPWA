import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";

const BackButton: FunctionComponent = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
  );
};

export default BackButton;
