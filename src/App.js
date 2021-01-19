import { HashRouter } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import Header from "./components/Header";
import Center from "./components/Center";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Center />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
