import Intro from "./Component/Intro/Intro";
import Skills from "./Component/Skills/Skills";
import Navbar from "./Component/common/Navbar/Navbar";
import Calculator from "./Component/projects/Calculator";
import Clock from "./Component/projects/Clock";
import TicTacToe from "./Component/projects/TicTacToe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Clock />
        <Calculator />
        <TicTacToe />
      </div>
    </div>
  );
}

export default App;
