import "./App.css";
import Naam from "./Naam";
import Sum from "./Sum";
import FullName from "./FullName";

function App() {
  const name = "isooo";
  const numbers = [23, 12, 345, 111];
  return (
    <>
      <h1>Opdrachten react les1</h1>
      <Naam naam={name} />
      <Sum numbers={numbers} />
      <FullName firstname="Ismail" lastname="Aytac" />
    </>
  );
}

export default App;
