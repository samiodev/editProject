import React from "react";

export default function SideBar() {
  const style={
    position: 'fixed',
    left: 0,
    width: 200,
    background: 'crimson',
    bottom: 0,
    top: 0,
    zIndex: -1
  }
  return(
    <div style={style}></div>
  )
}