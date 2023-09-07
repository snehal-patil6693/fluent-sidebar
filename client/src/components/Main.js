import React from "react";
import ShowTable from "./ShowTable";
import Registration from "./Registration";

const Main = ({ cssMain, styleMain }) => {
  return (
    <div className={cssMain} style={styleMain}>
      <br/>
      <div style={{marginLeft:'1rem'}}><Registration/></div>
      <br/><br/><br/>
      <div style={{marginLeft:'2rem',marginRight:'2rem'}}><ShowTable/></div>
    </div>
  );
};

export default Main;