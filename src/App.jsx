import { useState } from "react";
import qrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>
        <img className="qr-code" src={qrCode} alt="qr code" />
      </div>
      <div className="text-container">
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <h2>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </div>
  );
}

export default App;
