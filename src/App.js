import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="construction-container">
        <div className="logo">
          <img src="AD_logo_2.svg" className="App-logo" alt="logo" />
        </div>
        <div className="text"><span>This site is being refreshed. </span></div>
        <div className="sub-text">
        <span>Please visit Ashley's{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/ashleydavid"
            target="_blank" 
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          profile in the meantime.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
