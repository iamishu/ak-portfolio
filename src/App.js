import Intro from "./Component/Intro/Intro";
import Skills from "./Component/Skills/Skills";
import Navbar from "./Component/common/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
