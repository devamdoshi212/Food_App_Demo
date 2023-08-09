import { Fragment } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
