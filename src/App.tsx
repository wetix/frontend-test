import dayjs from "dayjs";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{dayjs("2020-01-02T00:00:00Z").format("D MMM YYYY")}</p>
        <a
          className="app-link"
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
