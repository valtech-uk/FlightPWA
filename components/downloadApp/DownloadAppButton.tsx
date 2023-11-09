import { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
};

const DownloadAppButton: FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<InstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: InstallPromptEvent) => {
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  console.log(deferredPrompt);

  const handleInstallPrompt = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
    }
  };

  return (
    <>
      <Button onClick={handleInstallPrompt}>Download</Button>
    </>
  );
};

export default DownloadAppButton;
