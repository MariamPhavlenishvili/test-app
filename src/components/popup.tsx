import { useState, useEffect } from "react";

import styles from "./popup.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface conditionsObject {
  mouseTracking: Boolean;
  fingerprintTracking: Boolean;
}

const Popup = ({}) => {
  const [close, setClose] = useState(false);
  const [agreeConditions, setAgreeConditions] = useState<conditionsObject>({
    mouseTracking: false,
    fingerprintTracking: false,
  });

  const closePopup = () => {
    setClose(!close);
  };

  const handleChange = (checked: boolean, value: string) => {
    if (checked && value === "mouse") {
      setAgreeConditions({ ...agreeConditions, mouseTracking: true });
    }

    if (checked && value === "fingerprint") {
      setAgreeConditions({ ...agreeConditions, fingerprintTracking: true });
    }

    if (!checked && value === "mouse") {
      setAgreeConditions({ ...agreeConditions, mouseTracking: false });
    }

    if (!checked && value === "fingerprint") {
      setAgreeConditions({ ...agreeConditions, fingerprintTracking: false });
    }

    console.log(agreeConditions)
  };

  const onAgreeButtonClick = () => {
    const tracking = window._dataHub.dataHubService.setConsent({
      mouseTracking: agreeConditions.mouseTracking,
      fingerprintTracking: agreeConditions.fingerprintTracking,
    });

    console.log(tracking);

    setClose(!close);
  };

  return (
    <div>
      {!close && (
        <div className={styles.popup}>
          <div className={styles.icon} onClick={closePopup}>
            <span>
              <CloseIcon />
            </span>
          </div>
          <div className={styles.div}>some consent text</div>
          <div className={styles.div}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="mouse"
                id="mouse"
                value={"mouse"}
                onChange={(e) => handleChange(e.target.checked, e.target.value)}
              />
              <label htmlFor="mouse">mouse</label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="fingerprint"
                id="fingerprint"
                value={"fingerprint"}
                onChange={(e) => handleChange(e.target.checked, e.target.value)}
              />
              <label htmlFor="fingerprint">fingerprint</label>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={onAgreeButtonClick} className={styles.buttonAgree}>
              დასტური
            </button>
            <button onClick={closePopup} className={styles.buttonCancel}>
              გათიშვა
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
