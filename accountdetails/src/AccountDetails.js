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
          <i>name:</i> Name
        </li>
        <li>
          <i>surname:</i> Surname
        </li>
        <li>
          <i>email:</i> example-mail@gmail.com
        </li>
        <li>
          <i>member since:</i> Jan 2022
        </li>
        <li>
          <i>last payment changed: </i>
          {lastPaymentDate}
        </li>
      </ul>
    </div>
  );
}

export default AccountDetails;
