import React from "react";
import { Link } from "react-router-dom";
import { createNanoEvents } from "nanoevents";

const AccountDetails = React.lazy(() =>
  import("AccountDetails/AccountDetails")
);
const PaymentDetails = React.lazy(() =>
  import("PaymentDetails/PaymentDetails")
);

const AuthenticatedView = (props) => {
  return (
    <React.Suspense fallback="Loading...">
      <AccountDetails emitter={props.emitter} />
      <br />
      <PaymentDetails emitter={props.emitter} />
    </React.Suspense>
  );
};

const MyAccount = () => {
  const renderView = () => {
    const token = window.sessionStorage.getItem("token");

    if (token) {
      const emitter = createNanoEvents();
      return <AuthenticatedView emitter={emitter} />;
    }

    return (
      <p>
        Please <Link to="/">sign in</Link> before accessing this section
      </p>
    );
  };

  return (
    <div>
      <h1>My Account</h1>

      {renderView()}
    </div>
  );
};

export default MyAccount;
