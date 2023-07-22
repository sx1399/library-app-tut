import './index.css';
import Footer from "./components/Nav";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages-20230722T003356Z-001/pages/Home"
import Books from "./pages-20230722T003356Z-001/pages/Books"
import { books } from "./data";
import BookInfo from "./pages-20230722T003356Z-001/pages/BookInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
