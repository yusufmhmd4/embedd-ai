import React, { useState } from "react";
import {Routes,Route,Link} from "react-router-dom"
import "./App.css";

import Charater from "./components/Charater";
import Home from "./components/Home";

import {chartList} from "./data"

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <div
          className={
            sidebar
              ? "side-nav-container side-bar-toggle"
              : "side-nav-container"
          }
        >
          <div className="title-container">
            <h1 className="character-title ">character.ai</h1>
            <div className="less-than-icons" onClick={() => setSidebar(!sidebar)}>
              {`<<`}
            </div>
          </div>
          <Link to="/character/new" ><button type="button" className="create-button">Create</button></Link>
         <Link to="/"> <button type="button" className="create-button discover">Discover</button></Link>
          <div className="chats-heading">Chats</div>
          <ul className="list-conatiner">
            {
              chartList.map(e=><li className="chat-element" key={e.id}>
                <div className="chat-name"><span className="first-letter">{e.name.slice(0,1)}</span>{e.name}</div>
              </li>)
            }
          </ul>
          <div className="bottom-sider">
            <hr/>
            <br/>
            <button type="button" className="try-ai-button"> Try c.ai</button>
          </div>
        </div>
        <div className="toggle-button-container">
          <button
            type="button"
            className="toggle-button"
            onClick={() => setSidebar(!sidebar)}
          >
            {`>>`}
          </button>
        </div>
      </div>
      <div className={sidebar ? "routes-container sidebar-open" : "routes-container"}>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/character/new" element={<Charater/>}/>
     </Routes>
      </div>
    </div>
  );
}

export default App;
