import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [show, setshow] = useState(false);
  const showcarthandler = () => {
    setshow(true);
  };
  const hidecarthandler = () => {
    setshow(false);
  };

  return (
    <CartContextProvider>
      {show && <Cart modal={show} onHideCart={hidecarthandler}></Cart>}
      <div className="bg-dark container-fluid mx-auto">
        <Header onShowCart={showcarthandler}></Header>
        <main>
          <Meals></Meals>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
