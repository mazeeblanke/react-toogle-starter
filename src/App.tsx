import React, { useState } from "react";
import Fade from "./Fade";
import Slide from "./Slide";

import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
          <Fade isActive={isToggled}>
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
          </Fade>
          {/* Basic Slide */}
          <Slide isActive={isToggled}>
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
          </Slide>
          {/* Complex Slide */}
          <Slide direction={1} isActive={isToggled}>
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
          </Slide>
      </main>
    </div>
  );
}
