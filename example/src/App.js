import "./index.css";
import Hover from "react-3d-hover";

export default function App() {
  return (
    <div className="App">
      <Hover
        perspective={500}
        max ={5}
      >
        <div
          style={{
            padding: "1rem",
            background: "#fff",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            width:"400px"
          }}
        >
          <h1>React 3D Hover</h1>
          <h2>Hover like smooth as butter</h2>
        </div>
      </Hover>
    </div>
  );
}
