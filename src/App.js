
import "./App.css";
import Profile from "./components/Profile";
import logo from "./images/logo.svg";
import IFG from "./images/IFG.png";
import Slack from "./images/slack.svg";
import github from "./images/github.svg";


function App() {
  return (
    <div className="App">
      <Profile />
      <section className="links">
        <a target="_blank" id="twitter" href="https://twitter.com/AnimateReaIity" rel="noreferrer">
          Twitter Link
        </a>
        <a target="_blank" id="btn__zuri" href="https://training.zuri.team/" rel="noreferrer">
          Zuri Team
        </a>
        <a target="_blank" id="books" href="http://books.zuri.team/" rel="noreferrer">
          Zuri Books
        </a>
        <a
          target="_blank"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=ronald_chittinapilly" rel="noreferrer"
        >
          Python Books
        </a>
        <a target="_blank" id="pitch" href="https://background.zuri.team/" rel="noreferrer">
          Background Check for Coders
        </a>
        <a
          target="_blank"
          id="book__design"
          href="https://books.zuri.team/design-rules" rel="noreferrer"
        >
          Design Books
        </a>
        <div className="icons">
          <a href="">
            <img src={Slack} alt="slack"/>
          </a>
          <a href="https://github.com/AnimateReality" target="_blank" rel="noreferrer">
          <img src={github} alt="github"/>
          </a>
        </div>
      </section>
      <footer>
        <div className="content">
          <img src={logo} alt="zuri logo" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={IFG} alt="I4G logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;