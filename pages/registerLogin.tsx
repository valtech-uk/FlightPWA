import { FunctionComponent, useEffect, useRef } from "react";
import {
  BeforeAuthCallback,
  OnSuccessCallback,
} from "@passageidentity/passage-auth";
import globalStyles from "../styles/global";
import styles from "../styles/common.module.css";
import { _styles } from "../styles/loginstyles";

interface PassageElement extends HTMLElement {
  appId?: string;
  onSuccess?: OnSuccessCallback;
  beforeAuth?: BeforeAuthCallback;
  lang: string;
  defaultCountryCode?: string;
  theme?: "light" | "dark" | "auto";
}

const RegisterLogin: FunctionComponent = () => {
  const passageAuthRef = useRef<PassageElement | null>(null);

  useEffect(() => {
    import("@passageidentity/passage-elements/passage-auth").then(() => {
      const passageAuth = passageAuthRef.current;

      if (passageAuth) {
        passageAuth.appId = "gk74rC4fq8KS4tdh2LyyuNpi";
      }
      const style = document.createElement("style");
      style.innerHTML = _styles;
      passageAuth.shadowRoot.querySelector("style").after(style);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loginregister}>
        <header className={styles.headerlogin}>
          <img src="/easyJet-logo-diap.svg" />
        </header>
        <div className={styles.logintabs}>
          <div>
            <span>Login here.</span>
          </div>
          <div>
            <span>Register here.</span>
          </div>
        </div>
        <div className={styles.logintabsspace} />
        <passage-auth ref={passageAuthRef}></passage-auth>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </div>
  );
};

export default RegisterLogin;
