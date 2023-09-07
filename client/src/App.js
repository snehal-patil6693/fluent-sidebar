import React, { useState } from "react";
import Draggable from "react-draggable";
import './App.css';
import Main from './components/Main';
import ViewDrawer from './components/ViewDrawer';
import Header from './components/Header';

import Sidebar from './components/Sidebar';

function App() {

  const [positionFirst, setPositionFirst] = useState({ positionFirstX: 0 });

  const onDragFirst = (e, data) => {
    setPositionFirst({ positionFirstX: data.x + 300 });
  };
 
  const styleSidebar = {

    width: positionFirst.positionFirstX + 300,
  };
  const styleMain = {
    backgroundColor: "beige",
  };
 
  return (
    <div className="app">
      <Header/>
      <div className="home">
     
      <Sidebar cssSidebar="sidebar" styleSidebar={styleSidebar} />
     
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: positionFirst.positionFirstX }}
        onDrag={onDragFirst}
      >
        <div>
          <ViewDrawer cssDrawer="drawerFirst" cssHandle="handleFirst" />
        </div>
      </Draggable>
     
      <Main cssMain="main" styleMain={styleMain} />
      
      </div>
    </div>
  );
}

export default App;
