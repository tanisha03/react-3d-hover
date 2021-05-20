import "./index.css";
import Hover from "react-3d-hover";

export default function App() {
  return (
    <div className="App">
      <Hover>
        <div
          style={{
            padding: "1rem",
            background: "#fff",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
          }}
        >
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button>Hello</button>
        </div>
      </Hover>
    </div>
  );
}
