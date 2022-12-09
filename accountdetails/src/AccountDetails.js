import React, {useEffect, useState} from "react";

const AccountDetails = (props) => {
  const [lastPaymentDate, setPaymentChanged] = useState("Jan 2022");

  useEffect(() => {
    const unsubscribe = props.emitter.on("PAYMENT_CHANGED", (date) => setPaymentChanged(date));

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h3>Account Details</h3>
      <ul>
        <li>
          <span>name:</span> Name
        </li>
        <li>
          <span>surname:</span> Surname
        </li>
        <li>
          <span>email:</span> example-mail@gmail.com
        </li>
        <li>
          <span>member since:</span> Jan 2022
        </li>
        <li>
          <span>last payment changed: </span>
          {lastPaymentDate}
        </li>
      </ul>
    </div>
  );
}

export default AccountDetails;
