
import "./App.css";
import Profile from "./components/Profile";
import github from "./images/github.svg";


function App() {
  return (
    <div className="App">
      <Profile />
      
      <section className="links">
      <a
          target="_blank"
          id="personal_wesbite"
          href="https://ronald-chittinappilly-portfolio.netlify.app/" rel="noreferrer">
          Personal Website
        </a>
        <a target="_blank" id="github" href="https://github.com/AnimateReality" rel="noreferrer">
          GitHub
        </a>
        <a target="_blank" id="linkedin" href="https://www.linkedin.com/in/ronald-chittinappilly" rel="noreferrer">
          LinkedIn
        </a>
       
        <div className="icons">
          <a href="https://github.com/AnimateReality" target="_blank" rel="noreferrer">
          <img src={github} alt="github"/>
          </a>
        </div>
      </section>
      <footer>
        <div className="content">

          Ronald LinkTree
         
        </div>
      </footer>
    </div>
  );
}

export default App;