import React from "react";
import {AppRouter} from "./router/AppRouter";

const App = () => {
  return (
    <div id="catalog">
      <h1>Shop</h1>

      <AppRouter/>
    </div>
  );
};

export default App;
